<template>
  <div class="glass-card-item">
    <div class="card-icon" v-if="icon">
      <VPIcon :name="icon" />
    </div>
    <h3 class="card-title">{{ title }}</h3>
    <p class="card-details">{{ details }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  details: String,
  icon: String
})
</script>

<style scoped>
.glass-card-item {
  position: relative;
  background: rgba(255, 255, 255, 0.45);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 24px;
  padding: 2.5rem;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 100%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

.glass-card-item:hover {
  transform: translateY(-8px);
  background: rgba(255, 255, 255, 0.6);
  border-color: var(--brand-primary);
  box-shadow: 0 20px 40px rgba(67, 20, 7, 0.15);
  z-index: 10;
  will-change: transform;
}

.card-icon {
  font-size: 2.5rem;
  color: var(--brand-primary);
  margin-bottom: 1.5rem;
  background: white;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}

.card-title {
  font-family: 'Outfit', sans-serif;
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--brand-primary);
  margin-top: 0;
  margin-bottom: 1rem;
}

.card-details {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #555;
  margin: 0;
}

[data-theme="dark"] .glass-card-item {
  background: rgba(16, 12, 10, 0.6);
  border-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

[data-theme="dark"] .glass-card-item:hover {
  background: rgba(16, 12, 10, 0.8);
  border-color: var(--brand-tertiary);
}

[data-theme="dark"] .card-icon {
  background: rgba(255, 255, 255, 0.05);
  color: var(--brand-tertiary);
}

[data-theme="dark"] .card-title {
  color: #fff;
}

[data-theme="dark"] .card-details {
  color: #aaa;
}
</style>
