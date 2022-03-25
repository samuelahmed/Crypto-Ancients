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
            <template 
              v-slot:append>
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
  {
    name: 'edition',
    label: 'Edition',
    sortable: true,
    required: true,
    sort: true,
    filter: true,
    field: row => row.edition,
    format: val => `${val}`,
    filterMethod: (val, row) => row.edition.toString().includes(val)
  },
  {
    name: 'attributes',
    label: 'Attributes',
    sortable: true,
    required: true,
    filter: true,
    field: row => 
      row.attributes[0].value + ' ' + row.attributes[0].trait_type + ' ' +
      row.attributes[1].value + ' ' + row.attributes[1].trait_type + ' ' +
      row.attributes[2].value + ' ' + row.attributes[2].trait_type + ' ' +
      row.attributes[3].value + ' ' + row.attributes[3].trait_type + ' ' +
      row.attributes[4].value + ' ' + row.attributes[4].trait_type + ' ' +
      row.attributes[5].value + ' ' + row.attributes[5].trait_type + ' ' +
      row.attributes[6].value + ' ' + row.attributes[6].trait_type + ' ' +
      row.attributes[7].value + ' ' + row.attributes[7].trait_type + ' ' +
      row.attributes[8].value + ' ' + row.attributes[8].trait_type + ' ' +
      row.attributes[9].value + ' ' + row.attributes[9].trait_type + ' ',
    format: val => `${val}`,
    filterMethod: (val, row) => row.attributes.toString().includes(val),
  },
    {
    name: 'name',
    label: 'Name',
    sortable: true,
    required: true,
    filter: true,
    field: row => row.name,
    format: val => `${val}`,
    filterMethod: (val, row) => row.name.toString().includes(val),
  },
]

export default defineComponent({
  name: 'GalleryIndex',
  components: {
    TableImgAncient,
  },
 
  data: () => ({
    items: [],
    filter: '',
    columns,
    rows: [],
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
