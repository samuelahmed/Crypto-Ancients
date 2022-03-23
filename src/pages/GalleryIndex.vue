<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md">
      <q-table
        grid
        :rows="items"
        row-key="name"
        :filter="filter"
        hide-header
        :columns="columns"
        virtual-scroll
        :pagination="{rowsPerPage: 100}"
        :rows-per-page-options="[50, 100, 250, 500, 1000]"
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
                  :attributes="props.row.attributes"
                  >
                </TableImgAncient>
                <span class="text-h6">
                  {{ props.row.edition }}
                  <!-- {{ props.row.attributes }} -->
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

const columns = [
    { name: 'edition', label: 'edition', field: 'edition', sortable: true },
    //FILTERING DOES NOT WORK FOR ATTRIBUTES nor attributes[0].value 
    { name: 'attributes', label: 'attributes', field: 'attributes', sortable: true },
]

export default defineComponent({
  name: 'GalleryIndex',
  components: {
    TableImgAncient
  },
  data: () => ({
    items: [],
    filter: '',
    columns,
    rows: []
  }),
  async created () {
    try {
      const res = await this.$api.get('/json/metadata.json')
      res.status === 200
        ? (this.items = res.data)
        : alert('there was an error getting items here')
      console.log(res.data)
    } catch (error) {
      alert('there was an error getting items at this location')
      console.log(attributes[0].value)
    }
  },
  methods: {
    navToAncientDetails (edition) {
      this.$router.push({ name: 'AncientDetails', params: { edition } })
    },
  }
})
</script>
