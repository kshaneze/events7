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
    // Storing data in reactive object
    const form = reactive({
      name: '',
      description: '',
      type: '',
      priority: '',
      relatedEvents: '',
    })

    // Function that is called on submit form
    // In this fucntion createEvent function is passed + parametar form(for data)
    const onSubmit = async () => {
      await createEvent({ ...form })
      form.name = ''
      form.description = ''
      form.type = ''
      form.priority = ''
      form.relatedEvents = ''
    }

    // sending info out
    return { form, onSubmit }
  },
}
</script>
