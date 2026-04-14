<template>
  <div class="roi-calculator">
    <div class="calculator-card">
      <h3>Calculadora de Eficiencia</h3>
      <div class="input-group">
        <label>Número de Ordenadores: {{ numPCs }}</label>
        <input type="range" v-model="numPCs" min="10" max="10000" step="10" />
      </div>

      <div class="input-group">
        <label>Tareas de mantenimiento/mes: {{ frequency }}</label>
        <input type="range" v-model="frequency" min="1" max="10" step="1" />
        <small>(Instalar apps, parches, cambios de config)</small>
      </div>

      <div class="input-group">
        <label>Tiempo manual por equipo: {{ manualTime }} min</label>
        <input type="range" v-model="manualTime" min="5" max="60" step="5" />
      </div>

      <div class="results-grid">
        <div class="result-item">
          <span class="label">Tiempo Manual</span>
          <span class="value">{{ Math.round(totalTimeManual) }} h / mes</span>
        </div>
        <div class="result-item highlight">
          <span class="label">Tiempo con Migasfree</span>
          <span class="value">{{ Math.round(totalTimeMigasfree) }} h / mes*</span>
        </div>
        <div class="result-item savings">
          <span class="label">Ahorro Mensual</span>
          <span class="value">{{ Math.round(savingsHours) }} h</span>
        </div>
      </div>

      <div class="roi-callout">
        <h4>Impacto Estimado</h4>
        <div class="roi-big">
          {{ Math.round(savingsPercent) }}% de ganancia en eficiencia
        </div>
        <p>* Migasfree automatiza el despliegue. El tiempo técnico se reduce drasticamente independientemente del número de equipos.</p>
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

const totalTimeManual = computed(() => {
  return (numPCs.value * frequency.value * manualTime.value) / 60
})

const totalTimeMigasfree = computed(() => {
  // Con Migasfree el tiempo es casi constante + un pequeño overhead por revisión
  return (frequency.value * 30 + numPCs.value * migasfreeTime.value) / 60
})

const savingsHours = computed(() => totalTimeManual.value - totalTimeMigasfree.value)
const savingsPercent = computed(() => (savingsHours.value / totalTimeManual.value) * 100)
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
  max-width: 650px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.05);
}

.calculator-card h3 {
  margin-top: 0;
  text-align: center;
  color: var(--brand-primary);
  font-weight: 800;
  font-size: 1.8rem;
}

.input-group {
  margin-bottom: 1.5rem;
}

.input-group label {
  display: block;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--brand-primary);
}

.input-group input[type="range"] {
  width: 100%;
  accent-color: var(--brand-primary);
  cursor: pointer;
}

.input-group small {
  color: #666;
  font-size: 0.8rem;
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
  border-radius: 8px;
  text-align: center;
  border: 1px solid #eee;
}

.result-item.highlight {
  border-color: var(--brand-primary);
  background: rgba(67, 20, 7, 0.05);
}

.result-item.savings {
  grid-column: span 2;
  background: linear-gradient(135deg, var(--brand-primary) 0%, #6b2d1c 100%);
  color: white;
  border: none;
  box-shadow: 0 8px 20px rgba(67, 20, 7, 0.2);
}

.result-item .label {
  display: block;
  font-size: 0.8rem;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  opacity: 0.8;
}

.result-item .value {
  font-size: 1.4rem;
  font-weight: bold;
}

.roi-callout {
  margin-top: 2rem;
  text-align: center;
  border-top: 1px dashed #ccc;
  padding-top: 1.5rem;
}

.roi-big {
  font-size: 3rem;
  font-weight: 900;
  color: var(--brand-primary);
  margin: 0.5rem 0;
  text-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

.roi-callout p {
  font-size: 0.75rem;
  font-style: italic;
  color: #888;
}
</style>
