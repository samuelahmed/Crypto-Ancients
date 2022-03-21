<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md">
      <q-table
        grid
        :rows="items"
        row-key="name"
        :filter="filter"
        hide-header
        :pagination="{rowsPerPage: 100}"
        :rows-per-page-options="[100, 150, 200]"
      >
        <template v-slot:top-left>
          <q-input
          outlined
          dense
          debounce="300"
          v-model="filter"
          placeholder="Search"
          >
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>
        <template v-slot:item="props">
          <div class="q-pa-sm">
            <q-card style="width: 100px; height: 115px">
              <q-card-section class="text-center">
                <TableImgAncient
                  @click="navToAncientDetails(props.row.edition)"
                  :edition="props.row.edition"
                  >
                </TableImgAncient>
                <span class="text-h6">
                  {{ props.row.edition }}
                </span>
              </q-card-section>
            </q-card>
          </div>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import TableImgAncient from '../components/TableImgAncient.vue'

export default defineComponent({
  name: 'GalleryIndex',
  components: {
    TableImgAncient
  },
  data: () => ({
    items: [],
    filter: ''
  }),
  async created () {
    try {
      const res = await this.$api.get('/json/metadata.json')
      res.status === 200
        ? (this.items = res.data)
        : alert('there was an error getting items')
      console.log(res.data)
    } catch (error) {
      alert('there was an error getting items')
    }
  },
  methods: {
    navToAncientDetails (edition) {
      this.$router.push({ name: 'AncientDetails', params: { edition } })
    }
  }
})
</script>
