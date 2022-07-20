<template>
  <h1 class="text-center">Create Event</h1>
  <div class="w-50 m-auto">
    <form action="" @submit.prevent="onSubmit">
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

      <button class="btn btn-success mt-3">Create Event</button>
    </form>
  </div>
</template>

<script>
import { createEvent } from '@/firebase'
import { reactive } from 'vue'
export default {
  setup() {
    const form = reactive({
      name: '',
      description: '',
      type: '',
      priority: '',
      relatedEvents: '',
    })

    const onSubmit = async () => {
      await createEvent({ ...form })
      form.name = ''
      form.description = ''
      form.type = ''
      form.priority = ''
      form.relatedEvents = ''
    }

    return { form, onSubmit }
  },
}
</script>
