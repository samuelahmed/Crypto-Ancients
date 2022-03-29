<template>
<div class="row">
  <div class="row-12">
    <div class="q-mt-xl text-center">
      <p class="text-h4">Attributes</p>
    </div>
    <div  class="q-pt-sm" style="width: 17vw; min-width: 200px">
        <q-badge color="secondary" class="q-mb-md">
          Selected: {{ (
            modelBackground + modelSun + modelEyes + modelFace + modelGlasses + modelHead +
            modelJewlery + modelSkin + modelLips
          ) }}
        </q-badge>
                      <div> see the {{ filter }}</div>

      <q-select
        v-model="modelBackground"
        multiple
          use-input
          map-options
          emit-value
          option-value="id"
          option-label="name"
        outlined
        bg-color="white"
        :options="optionsBackground"
        use-chips
        max-values="1"
        label="Background"
      />
    </div>
          <div  class="q-pt-sm" style="width: 17vw; min-width: 200px">

      <q-select
        v-model="modelSun"
        multiple
          map-options
          emit-value
          option-value="id"
          option-label="name"
        outlined
        bg-color="white"
        :options="optionsSun"
        use-chips
        max-values="1"
        label="Sun"
      />
    </div>
    <div  class="q-pt-sm" style="width: 17vw; min-width: 200px">
      <q-select
        v-model="modelSkin"
        multiple
               map-options
          emit-value
          option-value="id"
          option-label="name"
        bg-color="white"
        outlined
        :options="optionsSkin"
        use-chips
        max-values="1"
        label="Skin"
      />
    </div>
    <div  class="q-pt-sm" style="width: 17vw; min-width: 200px">
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
    <div  class="q-pt-sm" style="width: 17vw; min-width: 200px">
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
    <div  class="q-pt-sm" style="width: 17vw; min-width: 200px">
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
    <div  class="q-pt-sm" style="width: 17vw; min-width: 200px">
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
    <div  class="q-pt-sm" style="width: 17vw; min-width: 200px">
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
    <div  class="q-pt-sm" style="width: 17vw; min-width: 200px">
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
                :filter="filter + modelBackground + modelSun + modelEyes + modelFace + modelGlasses + modelHead +
            modelJewlery + modelSkin + modelLips"
                :filter-method="myFilter"
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
    // filterMethod: (val, row) => row.edition.toString().filter(val)
  },
  {
    name: 'attributes',
    label: 'Attributes',
    sortable: true,
    required: true,
    filter: true,
    field: row => row.attributes.map( x => x.trait_type + ' ' + x.value).join( ' ' ),
    format: val => `${val}`,
    // filterMethod: (val) => field.toString().toLowerCase().filter(val)
  },
    {
    name: 'name',
    label: 'Name',
    sortable: true,
    required: true,
    filter: true,
    field: row => row.name,
    format: val => `${val}`,
    // filterMethod: (val, row) => row.name.toString().filter(val),
  },
]

export default defineComponent({
  name: 'GalleryIndex',
  components: {
    TableImgAncient,
  },
setup () {
    return {
      modelTest: ref([]),
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
      {
        label: 'Background',
        value: 'background',
        id: 'background',
        name: 'background',
      },
      {
        label: 'Daytime',
        value: 'daytime',
        id: 'daytime',
        name: 'daytime',
      },
      {
        label: 'Night',
        value: 'night',
        id: 'night',
        name: 'night',
      },
      {
        label: 'Ocean',
        value: 'ocean',
        id: 'ocean',
        name: 'ocean',
      },
      {
        label: 'Background Metaverse',
        value: 'background metaverse',
        id: 'background metaverse',
        name: 'background metaverse',
      },
      {
        label: 'Forest',
        value: (' ' + 'forest'),
        id: (' ' + 'forest'),
        name: 'forest',
      },
    ],

        //fix spelling for night
        // 'Daytime', 'Night', 'Ocean', 'background Metaverse', 'Forest' 
    
     optionsSun: [
        // 'Sun Standard', 'sun Red', 'sun Metaverse Blue', 'sun Golden', 'sun Purple', 'sun Pink'
              {
        label: 'Sun Standard',
        value: 'sun Standard',
        id: (' ' + 'sun Standard'),
        name: (' ' + 'sun Standard'),
      },
      {
        label: 'sun Red',
        value: 'sun Red crypto ancient cryptoancient',
        id: (' ' + 'sun Red crypto ancient cryptoancient'),
        name: (' ' + 'sun Red crypto ancient cryptoancient'),
      },
      {
        label: 'sun Metaverse Blue',
        value: 'sun Metaverse Blue',
        id: (' ' + 'sun Metaverse Blue'),
        name: (' ' + 'sun Metaverse Blue'),
      },
      {
        label: 'sun Golden',
        value: 'sun Golden',
        id: (' ' + 'sun Golden' + ' '),
        name: (' ' + 'sun Golden' + ' '),
      },
      {
        label: 'sun Purple',
        value: 'sun Purple',
        id: (' ' + 'sun Purple' + ' '),
        name: (' ' + 'sun Purple' + ' '),
      },
      {
        label: 'sun Pink',
        value: 'sun Pink',
        id: (' ' + 'sun Pink' + ' '),
        name: (' ' + 'sun Pink' + ' '),
      },
      ],
      optionsSkin: [
      //  'skin Human A', 'Human B', 'Human C', 'Human D', 'Human E', 'Human F', 'Human G', 'Human H', 'Human I', 'Human K', 'Human L', 'Human M', 'Human O'
        {
        label: 'skin Human A',
        value: 'skin Human A',
        id: (' ' + 'skin Human A' + ' '),
        name: (' ' + 'skin Human A' + ' '),
      },
      {
        label: 'Human B',
        value: 'Human B',
        id: (' ' + 'Human B' + ' '),
        name: (' ' + 'Human B' + ' '),
      },

      ],
      optionsEyes: [
        'eyes Standard', 'Bloodshot', 'eyes Blue', 'eyes Cross', 'eyes Green', 'Swirly Eye Tattoo', 'eyes Brown', 'eyes White', 'eyes Golden', 'eyes Pink',  'eyes Purple', 'eyes Red', 'Teal Tear Drops', 'Purple Tear Drops', 'Red Tear Drops', 'Green Tear Drops'
      ],
      optionsLips: [
        'lips Green', 'lips Blue', 'lips Dark Blue', 'lips Dark Purple', 'lips Brown', 'lips Teal', 'lips Purple', 'lips Dark Red', 'Lips Metaverse Blue', 'lips Beige', 'lips Orange', 'lips Dark Purple', 'lips Red'
      ],
      optionsFace: [
        'face Standard', 'Curly Mustache', 'Heaven Sign', 'Numbers Tattoo', 'Seven Tattoo', 'Mask', 'Pink Circle', 'Heart Cheek', 'Stubble', 'Young Beard', 'Green Handlebars', 'Grey Beard'
      ],
      optionsGlasses: [
        'glasses None', 'Fashion', 'Eye Patch', 'AR Headwear 2027', 'Future', 'Seeing', 'Active Red', 'Sunglasses', 'glasses Purple'
      ],
      optionsJewlery: [
        'jewelry None', 'Facechain', 'Neck Swag Two', 'Green Neck Swag', 'Golden Round Earing', 'Metaverse Blue Gold', 'Gold Cross', 'Purple Gem', 'Pearls', 'Multiple Gold Earrings', 'Scarab Gold Plate', 'Gold Chain', 'Gold Earing', 'Neck Swag Unique', 'Neck Swag' 
      ],
      optionsHead: [
        'head Standard', 'Hardhat', 'Metapriest', 'head Queen', 'Metaverse Queen', 'Ancient Headwear', 'Gold Hat', 'head Blue Hair', 'head Purple Hair', 'Crazy Blue Hair', 'Crazy Green Hair', 'Crazy Grey Hair', 'Side Ponytail', 'Orange Bun', 'head Grey Hair', 'Purple Blue Bangs', 'Flow Hair',
        'Brown Punk Hair', 'Metaverseblue Punk Hair', 'Gold Punk Hair', 'Multicolor Hat', 'Blue Hat', 'Animal Ears', 'Pink Hoodie', 'Grey Hoodie', 'Underground Pink', 'NPC Purple', 'NPC Brown', 'Lego Orange', 'Lego Brown', 'Pink Killa', 'Curly Purple Hair', 'Napoleon Hat'
      ],
      //       pagination: ref({
      //   rowsPerPage: 0
      // }),
    }
  }, 

  data: () => ({
    items: [],
    filter: '',
    terms: '',
    columns,
    rows: [],
    Selected: [],
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
  computed: {
     filter() {
      return {
        search: this.search,   
      }
    },
  },
  methods: {
    navToAncientDetails (edition) {
      this.$router.push({ name: 'AncientDetails', params: { edition } })
    },
      //      modelBackground + modelSun + modelEyes + modelFace + modelGlasses + modelHead +
        //    modelJewlery + modelSkin + modelLips
        
 myFilter (rows, terms, cols, cellValue) {
      const lowerTerms = terms 
      //add modelBackground + modelSun + modelEyes + modelFace + modelGlasses + modelHead +
      //   modelJewlery + modelSkin + modelLips 
        ? terms.toLowerCase() 
        : ''
      // console.log(rows)
      // console.log(terms)
      // console.log(cols)
      // console.log(cellValue)
      // console.log(lowerTerms)
      return rows.filter(
        row => cols.some(col => (cellValue(col, row) + '').toLowerCase().includes(lowerTerms))
      )
    }
  },
})
</script>


