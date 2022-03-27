<template>
<div class="row">
  <div class="row-12">
    <div class="q-mt-xl text-center">
      <p class="text-h4">Attributes</p>
    </div>
    <div  class="q-pt-sm" style="width: 17vw">
        <!-- <q-badge color="secondary" class="q-mb-md">
          Selected: {{ (
            modelBackground + modelSun + modelEyes + modelFace + modelGlasses + modelHead +
            modelJewlery + modelSkin + modelLips
          ) }}
        </q-badge> -->
      <q-select
        v-model="modelBackground"
        multiple
        outlined
        bg-color="white"
        :options="optionsBackground"
        use-chips
        max-values="1"
        label="Background"
      />
    </div>
          <div  class="q-pt-sm" style="width: 17vw">

      <q-select
        v-model="modelSun"
        multiple
        outlined
        bg-color="white"
        :options="optionsSun"
        use-chips
        max-values="1"
        label="Sun"
      />
    </div>
    <div  class="q-pt-sm" style="width: 17vw">
      <q-select
        v-model="modelSkin"
        multiple
        bg-color="white"
        outlined
        :options="optionsSkin"
        use-chips
        max-values="1"
        label="Skin"
      />
    </div>
    <div  class="q-pt-sm" style="width: 17vw">
      <q-select
        v-model="modelEyes"
        multiple
        bg-color="white"
        outlined
        :options="optionsEyes"
        use-chips
        max-values="1"
        label="Eyes"
      />
    </div>
    <div  class="q-pt-sm" style="width: 17vw">
      <q-select
        v-model="modelLips"
        multiple
        bg-color="white"
        outlined
        :options="optionsLips"
        use-chips
        max-values="1"
        label="Lips"
      />
    </div>
    <div  class="q-pt-sm" style="width: 17vw">
      <q-select
        v-model="modelFace"
        multiple
        bg-color="white"
        outlined
        :options="optionsFace"
        use-chips
        max-values="1"
        label="Face"
      />
    </div>
    <div  class="q-pt-sm" style="width: 17vw">
      <q-select
        v-model="modelGlasses"
        multiple
        bg-color="white"
        outlined
        :options="optionsGlasses"
        use-chips
        max-values="1"
        label="Glasses"
      />
    </div>
    <div  class="q-pt-sm" style="width: 17vw">
      <q-select
        v-model="modelJewlery"
        multiple
        bg-color="white"
        outlined
        :options="optionsJewlery"
        use-chips
        max-values="1"
        label="Jewlery"
      />
    </div>
    <div  class="q-pt-sm" style="width: 17vw">
      <q-select
        v-model="modelHead"
        multiple
        bg-color="white"
        outlined
        :options="optionsHead"
        use-chips
        max-values="1"
        label="Head"
      />
    </div>
  </div>
  <div class="col">
    <div class="q-ma-md">
    <q-scroll-area style="height: 700px; width: 69vw;">
        <div class="q-py-xs">
          <q-page class="flex flex-center">
            <div class="q-pa-md">
              <q-table
                grid
                :rows="items"
                row-key="name"
                table-style="overflow-y:hidden"
                :filter="filter || modelBackground + modelSun + modelEyes + modelFace + modelGlasses + modelHead + modelJewlery + modelSkin + modelLips"
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
        </div>
      </q-scroll-area>
    </div>
  </div>
</div>
</template>

<script>
import { defineComponent } from 'vue'
import TableImgAncient from '../components/TableImgAncient.vue'
import { ref } from 'vue'


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
      row.attributes[0].trait_type + ' ' + row.attributes[0].value + ' ' +
      row.attributes[1].trait_type + ' ' + row.attributes[1].value + ' ' +
      row.attributes[2].trait_type + ' ' + row.attributes[2].value + ' ' +
      row.attributes[3].trait_type + ' ' + row.attributes[3].value + ' ' +
      row.attributes[4].trait_type + ' ' + row.attributes[4].value + ' ' +
      row.attributes[5].trait_type + ' ' + row.attributes[5].value + ' ' +
      row.attributes[6].trait_type + ' ' + row.attributes[6].value + ' ' +
      row.attributes[7].trait_type + ' ' + row.attributes[7].value + ' ' +
      row.attributes[8].trait_type + ' ' + row.attributes[8].value + ' ' +
      row.attributes[9].trait_type + ' ' + row.attributes[9].value + ' ',
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
setup () {
    return {
      modelBackground: ref([]),
      modelSun: ref([]),
      modelSkin: ref([]),
      modelEyes: ref([]),
      modelLips: ref([]),
      modelFace: ref([]),
      modelGlasses: ref([]),
      modelJewlery: ref([]),
      modelHead: ref([]),

      optionsBackground: [
       'Standard', 'Day', 'Night', 'Woods', 'Ocean',
      ],
      optionsSun: [
        'Standard', 'Sun Red', 'Metaverse Blue', 'Golden', 'Purple'
      ],
      optionsSkin: [
        'Human A', 'Human B', 'Human C', 'Human D', 'Human E', 'Human F', 'Human G'
      ],
      optionsEyes: [
        'Standard', 'Green', 'Blue', 'Snake', 'Red', 'Teal Tear Drops'
      ],
      optionsLips: [
        'Standard', 'Pink', 'Green', 'Blue', 'Brown', 'Teal', 'Purple', 'Dark Blue', 
      ],
      optionsFace: [
        'Standard', 'Swirly Tattoo', 'Heaven Mark', 'Red Teardrops', '777 Tattoo', 'Mask', 'Pink Circle'
      ],
      optionsGlasses: [
        'Standard', 'Fashion', 'Red Glasses', 'Future', 'Seeing', 'AR Headwear 2027'
      ],
      optionsJewlery: [
        'Standard', 'Facechain', 'Neck Swag', 'Gold Earring', 'Red', 'Gold Cross', 
      ],
      optionsHead: [
        'Standard', 'Hardhat', 'Metapriest', 'Queen', 'Grey Hair', 'Purple Blue Bangs', 'Flow Hair'
      ],
      pagination: ref({
        rowsPerPage: 0
      }),
    }
  }, 
  data: () => ({
    items: [],
    filter: '',
    columns,
    rows: [],
    Selected: []
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


