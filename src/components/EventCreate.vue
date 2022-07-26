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
        <label for="priority">Event priority</label>
        <select
          name="priority"
          id="priority"
          v-model="form.priority"
          class="form-control"
        >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
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
import { reactive, computed } from 'vue'
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'

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

    const rules = computed(() => {
      return {
        name: { required },
        description: { required },
        type: { required },
        priority: { required },
        relatedEvents: { required },
      }
    })

    const v$ = useVuelidate(rules, form)

    // Function that is called on submit form
    // In this fucntion createEvent function is passed + parametar form(for data)
    const onSubmit = async () => {
      const result = await v$.value.$validate()
      if (result) {
        await createEvent({ ...form })
        form.name = ''
        form.description = ''
        form.type = ''
        form.priority = ''
        form.relatedEvents = ''
        alert('Form Submited')
      } else {
        alert('Form failed validation')
      }
    }

    // sending info out
    return { form, onSubmit, v$: useVuelidate() }
  },
}
</script>
