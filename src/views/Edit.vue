<template>
  <div class="card card-body mt-4 w-50 m-auto">
    <h3>Edit events</h3>
    <form @submit.prevent="update">
      <div class="form-group">
        <label for="">Event Name</label>
        <input type="text" v-model="form.name" class="form-control" />
      </div>

      <div class="form-group">
        <label for="">Description</label>
        <input type="text" v-model="form.description" class="form-control" />
      </div>
      <div class="form-group">
        <label for="">Event type</label>
        <input type="text" v-model="form.type" class="form-control" />
      </div>
      <div class="form-group">
        <label for="">Event priority</label>
        <input type="text" v-model="form.priority" class="form-control" />
      </div>
      <div class="form-group">
        <label for="">Related Events</label>
        <input type="text" v-model="form.relatedEvents" class="form-control" />
      </div>

      <button class="btn btn-success mt-3">Update Event</button>
    </form>
  </div>
</template>

<script>
import { reactive, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getEvent, updateEvent } from '@/firebase'
export default {
  setup() {
    const router = useRouter()
    const route = useRoute()
    const eventId = computed(() => route.params.id)
    const form = reactive({
      name: '',
      // id: '',
      description: '',
      type: '',
      priority: '',
      relatedEvents: '',
    })

    onMounted(async () => {
      const event = await getEvent(eventId.value)
      console.log(event, eventId.value)
      form.name = event.name
      // form.id = event.id
      form.description = event.description
      form.type = event.type
      form.priority = event.priority
      form.relatedEvents = event.relatedEvents
    })
    const update = async () => {
      await updateEvent(eventId.value, { ...form })
      router.push('/')
      form.name = ''
      // form.id = ''
      form.description = ''
      form.type = ''
      form.priority = ''
      form.relatedEvents = ''
    }
    return { form, update }
  },
}
</script>
