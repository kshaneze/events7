<template>
  <div class="card mt-4">
    <table class="table m-0">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Id</th>
          <th scope="col">Description</th>
          <th scope="col">Type</th>
          <th scope="col">Priority</th>
          <th scope="col">RelatedEvents</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="{
            id,
            name,
            description,
            type,
            priority,
            relatedEvents,
          } in events"
          :key="id"
        >
          <td>{{ name }}</td>
          <td>{{ id }}</td>
          <td>{{ description }}</td>
          <td>{{ type }}</td>
          <td>{{ priority }}</td>
          <td>{{ relatedEvents }}</td>
          <td>
            <router-link :to="`/edit/${id}`">
              <button class="btn btn-primary btn-sm me-2">Edit</button>
            </router-link>
            <button class="btn btn-danger btn-sm" @click="deleteEvent(id)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { useLoadEvents, deleteEvent } from '@/firebase'
export default {
  setup() {
    // Here we are getting array of events
    const events = useLoadEvents()
    return { events, deleteEvent }
  },
}
</script>
