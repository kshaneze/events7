<template>
  <div class="card card-body mt-4 w-50 m-auto">
    <h3>Edit event</h3>
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
    // in composition API this is the way to access params form route
    const eventId = computed(() => route.params.id)
    const form = reactive({
      name: '',
      description: '',
      type: '',
      priority: '',
      relatedEvents: '',
    })

    // onMount lifescycle hook that is use to load events
    onMounted(async () => {
      const event = await getEvent(eventId.value)

      form.name = event.name
      // form.id = event.id
      form.description = event.description
      form.type = event.type
      form.priority = event.priority
      form.relatedEvents = event.relatedEvents
    })

    // Update function that is called on button edit
    // In this function updateEvent fucntion is called and passed two parameters (id and events)
    const update = async () => {
      await updateEvent(eventId.value, { ...form })

      // After updating by default send us to Home page
      router.push('/events7/')
      // Reset all inputs
      form.name = ''
      form.description = ''
      form.type = ''
      form.priority = ''
      form.relatedEvents = ''
    }
    // Send data outside of setup
    return { form, update }
  },
}
</script>
