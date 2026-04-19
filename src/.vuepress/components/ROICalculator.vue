<template>
  <div class="roi-calculator">
    <div class="calculator-card">
      <h3>Calculadora de ROI</h3>
      
      <div class="input-grid">
        <div class="input-group">
          <label>Ordenadores: {{ numPCs }}</label>
          <input type="range" v-model="numPCs" min="10" max="10000" step="10" />
        </div>

        <div class="input-group">
          <label>Tareas/mes: {{ frequency }}</label>
          <input type="range" v-model="frequency" min="1" max="20" step="1" />
          <small>(Apps, parches, config)</small>
        </div>

        <div class="input-group">
          <label>Tiempo manual/PC: {{ manualTime }} min</label>
          <input type="range" v-model="manualTime" min="5" max="60" step="5" />
        </div>

        <div class="input-group highlight-input">
          <label>Coste Hora Técnico: {{ hourlyRate }}€</label>
          <input type="range" v-model="hourlyRate" min="15" max="100" step="5" />
        </div>
        
        <div class="input-group tool-cost-input">
          <label>Coste Herramienta/mes: {{ toolCost }}€</label>
          <input type="range" v-model="toolCost" min="0" max="5000" step="100" />
          <small>(Hosting, soporte, mant.)</small>
        </div>
      </div>

      <div class="results-grid">
        <div class="result-item">
          <span class="label">Tiempo Manual</span>
          <span class="value">{{ Math.round(totalTimeManual) }} h / mes</span>
        </div>
        <div class="result-item highlight">
          <span class="label">Con Migasfree</span>
          <span class="value">{{ Math.round(totalTimeMigasfree) }} h / mes*</span>
        </div>
        <div class="result-item savings">
          <span class="label">Ahorro Estimado</span>
          <span class="value">{{ Math.round(savingsHours) }} h / {{ formatCurrency(savingsEuro) }} mes</span>
        </div>
      </div>

      <div class="roi-callout">
        <div class="roi-stat-box">
          <div class="roi-stat">
            <span class="roi-big">{{ Math.round(savingsPercent) }}%</span>
            <span class="roi-label">Reducción tiempo operativo</span>
          </div>
          <div class="roi-stat" v-if="roiPercent > 0">
            <span class="roi-big">{{ formatPercent(roiPercent) }}</span>
            <span class="roi-label">ROI Mensual</span>
          </div>
          <div class="roi-stat" v-if="paybackMonths > 0">
            <span class="roi-big">{{ paybackMonths }}</span>
            <span class="roi-label">Meses recuperación (Payback)</span>
          </div>
        </div>
        <div class="roi-projection" v-if="savingsEuro > 0">
          Ahorro proyectado a 3 años: <strong>{{ formatCurrency(savingsEuro * 36) }}</strong>
        </div>
        <p>* Migasfree automatiza el despliegue. El tiempo técnico se reduce drásticamente independientemente del número de equipos.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const numPCs = ref(500)
const frequency = ref(2)
const manualTime = ref(20)
const migasfreeTime = ref(0.2) // Promediado por equipo en automatización
const hourlyRate = ref(30)
const toolCost = ref(300)

const totalTimeManual = computed(() => {
  return (numPCs.value * frequency.value * manualTime.value) / 60
})

const totalTimeMigasfree = computed(() => {
  // Con Migasfree el tiempo es casi constante + un pequeño overhead por revisión
  return (frequency.value * 30 + numPCs.value * migasfreeTime.value) / 60
})

const savingsHours = computed(() => totalTimeManual.value - totalTimeMigasfree.value)
const savingsPercent = computed(() => (savingsHours.value / totalTimeManual.value) * 100)
const savingsEuro = computed(() => savingsHours.value * hourlyRate.value)

const roiPercent = computed(() => {
  if (toolCost.value <= 0) return 0
  return ((savingsEuro.value - toolCost.value) / toolCost.value) * 100
})

const paybackMonths = computed(() => {
  if (savingsEuro.value <= 0) return 0
  // Inversión inicial (estimada como un mes de coste de herramienta + setup inicial que podemos simular como toolCost * 2)
  const initialInvestment = toolCost.value * 2 
  const months = initialInvestment / savingsEuro.value
  return months < 1 ? '< 1' : Math.ceil(months)
})

const formatCurrency = (val) => {
  return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(val)
}

const formatPercent = (val) => {
  if (val > 1000) return '>1000%'
  return Math.round(val) + '%'
}
</script>

<style scoped>
.roi-calculator {
  margin: 2rem 0;
  display: flex;
  justify-content: center;
}

.calculator-card {
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  padding: 2.5rem;
  width: 100%;
  max-width: 750px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.05);
}

.calculator-card h3 {
  margin-top: 0;
  text-align: center;
  color: var(--brand-primary);
  font-weight: 800;
  font-size: 1.8rem;
  margin-bottom: 2rem;
}

.input-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.input-group {
  margin-bottom: 0.5rem;
}

.input-group label {
  display: block;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--brand-primary);
  font-size: 0.9rem;
}

.input-group input[type="range"] {
  width: 100%;
  accent-color: var(--brand-primary);
  cursor: pointer;
}

.input-group small {
  color: #666;
  font-size: 0.75rem;
  display: block;
  margin-top: 0.25rem;
}

.highlight-input {
  background: rgba(67, 20, 7, 0.05);
  padding: 0.75rem;
  border-radius: 10px;
}

.results-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 2rem;
}

.result-item {
  background: white;
  padding: 1rem;
  border-radius: 12px;
  text-align: center;
  border: 1px solid #eee;
}

.result-item.highlight {
  border-color: var(--brand-primary);
  background: rgba(67, 20, 7, 0.02);
}

.result-item.savings {
  grid-column: span 2;
  background: linear-gradient(135deg, var(--brand-primary) 0%, #6b2d1c 100%);
  color: white;
  border: none;
  box-shadow: 0 8px 20px rgba(67, 20, 7, 0.15);
}

.result-item .label {
  display: block;
  font-size: 0.75rem;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  opacity: 0.8;
  letter-spacing: 0.5px;
}

.result-item .value {
  font-size: 1.25rem;
  font-weight: 800;
}

.roi-callout {
  margin-top: 2.5rem;
  text-align: center;
  border-top: 1px dashed rgba(0,0,0,0.1);
  padding-top: 2rem;
}

.roi-stat-box {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1.5rem;
  gap: 1rem;
}

.roi-stat {
  display: flex;
  flex-direction: column;
}

.roi-big {
  font-size: 2.5rem;
  font-weight: 900;
  color: var(--brand-primary);
  line-height: 1;
}

.roi-label {
  font-size: 0.8rem;
  font-weight: 600;
  color: #666;
  margin-top: 0.5rem;
}

.roi-projection {
  background: rgba(67, 20, 7, 0.05);
  display: inline-block;
  padding: 0.5rem 1.5rem;
  border-radius: 30px;
  font-size: 0.9rem;
  color: var(--brand-primary);
  margin-bottom: 1rem;
}

.roi-callout p {
  font-size: 0.75rem;
  font-style: italic;
  color: #999;
}

@media (max-width: 600px) {
  .input-grid, .results-grid {
    grid-template-columns: 1fr;
  }
  .result-item.savings {
    grid-column: span 1;
  }
  .roi-stat-box {
    flex-direction: column;
    gap: 2rem;
  }
}
</style>
