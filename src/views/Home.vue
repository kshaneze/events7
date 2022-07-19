<template>
  <EventCreate />
  <EventList />
</template>

<script>
import EventCreate from '@/components/EventCreate.vue'
import EventList from '@/components/EventList.vue'
export default {
  name: 'Home',
  components: { EventCreate, EventList },
}
</script>
