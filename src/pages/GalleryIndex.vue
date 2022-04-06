<template>
<div class="row">
  <div class="row-12">
    <div class="q-mt-xl text-center">
      <p class="text-h4">Attributes</p>
    </div>
    <div  class="q-pt-sm" style="width: 17vw; min-width: 200px">
        <!-- <q-badge color="secondary" class="q-mb-md">
          Selected: {{ (
            modelBackground + modelSun + modelEyes + modelFace + modelGlasses + modelHead +
            modelJewelry + modelSkin + modelLips
          ) }}
        </q-badge>
        <div> see the {{ filter }}</div> -->
                <div class="q-pt-none" style="width: 17vw; min-width: 200px">
              <q-select
        hide-dropdown-icon

      filled
      v-model="modelEdition"
      use-input
      use-chips
      multiple
      max-values="1"
      input-debounce="0"
      @new-value="createValue"
      @filter="filterFn"
      label="Search by ID">


      <template v-slot:append>
          <q-icon name="search" @click.stop />
        </template>
    </q-select>
  
      <!-- <q-select
        v-model="modelEdition"
        multiple
        bg-color="white"
        outlined
        :options="optionsEdition"
        use-chips
        max-values="1"
        label="Test"
      /> -->
    </div>
                    <div class="q-pt-sm" style="width: 17vw; min-width: 200px">

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
    </div>
    <div class="q-pt-sm" style="width: 17vw; min-width: 200px">
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
    <div class="q-pt-sm" style="width: 17vw; min-width: 200px">
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
    <div class="q-pt-sm" style="width: 17vw; min-width: 200px">
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
    <div class="q-pt-sm" style="width: 17vw; min-width: 200px">
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
    <div class="q-pt-sm" style="width: 17vw; min-width: 200px">
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
    <div class="q-pt-sm" style="width: 17vw; min-width: 200px">
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
    <div class="q-pt-sm" style="width: 17vw; min-width: 200px">
      <q-select
        v-model="modelJewelry"
        multiple
        bg-color="white"
        outlined
        :options="optionsJewelry"
        use-chips
        max-values="1"
        label="jewelry"
      />
    </div>
    <div class="q-pt-sm" style="width: 17vw; min-width: 200px">
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
                :filter="buildFilter()"
                :filter-method="filterProducts"
                hide-header
                :columns="columns"
                virtual-scroll
                :pagination="{rowsPerPage: 100}"
                :rows-per-page-options="[50, 100, 250, 500, 1000]"
              >
                <!-- <template v-slot:top-left>
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
                </template> -->
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
import FiltersVue from 'src/components/Filters.vue'

const stringOptions = []



const filterOptions = ref(stringOptions)

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
    field: row => row.attributes.map( x => x.trait_type + ' ' + x.value).join( ' ' ),
    format: val => `${val}`,
    },
    {
    name: 'name',
    label: 'Name',
    sortable: true,
    required: true,
    filter: true,
    field: row => row.name,
    format: val => `${val}`,
  },
]

// const thisValue = this.val

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
      modelJewelry: ref([]),
      modelHead: ref([]),
      modelEdition: ref([]),
      filterOptions,
      needle: ref(''),
            model: ref(null),


      optionsBackground: [
        'Daytime', 'Night', 'Ocean', 'Metaverse', 'Forest'
      ],
      optionsSun: [
        'Standard', 'Red', 'Metaverse Blue', 'Golden', 'Purple', 'Pink'
      ],
      optionsSkin: [
        'Human A', 'Human B', 'Human C', 'Human D', 'Human E', 'Human F', 'Human H', 'Human I', 'Human K', 'Human L', 'Human O'
      ],
      optionsEyes: [
        'Standard', 'Bloodshot', 'Blue', 'Cross', 'Green', 'Swirly Eye Tattoo', 'Brown', 'White', 'Golden', 'Pink',  'Purple', 'Red', 'Teal Tear Drops', 'Purple Tear Drops', 'Red Tear Drops', 'Green Tear Drops'
      ],
      optionsLips: [
        'Green', 'Blue', 'Dark Blue', 'Dark Purple', 'Brown', 'Teal', 'Purple', 'Dark Red', 'Metaverse Blue', 'Beige', 'Orange', 'Dark Purple', 'Red'
      ],
      optionsFace: [
        'face Standard', 'Curly Mustache', 'Heaven Sign', 'Numbers Tattoo', 'Seven Tattoo', 'Mask', 'Pink Circle', 'Heart Cheek', 'Stubble', 'Young Beard', 'Green Handlebars', 'Grey Beard'
      ],
      optionsGlasses: [
        'glasses None', 'Fashion', 'Eye Patch', 'AR Headwear 2027', 'Future', 'Seeing', 'Active Red', 'Sunglasses', 'glasses Purple'
      ],
      optionsJewelry: [
        'jewelry None', 'Facechain', 'Neck Swag Two', 'Green Neck Swag', 'Golden Round Earing', 'Metaverse Blue Gold', 'Gold Cross', 'Purple Gem', 'Pearls', 'Multiple Gold Earrings', 'Scarab Gold Plate', 'Gold Chain', 'Gold Earing', 'Neck Swag Unique', 'Neck Swag' 
      ],
      optionsHead: [
        'head Standard', 'Hardhat', 'Metapriest', 'head Queen', 'Metaverse Queen', 'Ancient Headwear', 'Gold Hat', 'head Blue Hair', 'head Purple Hair', 'Crazy Blue Hair', 'Crazy Green Hair', 'Crazy Grey Hair', 'Side Ponytail', 'Orange Bun', 'head Grey Hair', 'Purple Blue Bangs', 'Flow Hair',
        'Brown Punk Hair', 'Metaverseblue Punk Hair', 'Gold Punk Hair', 'Multicolor Hat', 'Blue Hat', 'Animal Ears', 'Pink Hoodie', 'Grey Hoodie', 'Underground Pink', 'NPC Purple', 'NPC Brown', 'Lego Orange', 'Lego Brown', 'Pink Killa', 'Curly Purple Hair', 'Napoleon Hat'
      ],
      // optionsEdition: [
      //   '1', '69', '2356', '6529', '99999'
      // ],
      
      
      createValue (val, done) {
        // Calling done(var) when new-value-mode is not set or "add", or done(var, "add") adds "var" content to the model
        // and it resets the input textbox to empty string
        // ----
        // Calling done(var) when new-value-mode is "add-unique", or done(var, "add-unique") adds "var" content to the model
        // only if is not already set
        // and it resets the input textbox to empty string
        // ----
        // Calling done(var) when new-value-mode is "toggle", or done(var, "toggle") toggles the model with "var" content
        // (adds to model if not already in the model, removes from model if already has it)
        // and it resets the input textbox to empty string
        // ----
        // If "var" content is undefined/null, then it doesn't tampers with the model
        // and only resets the input textbox to empty string

      // console.log(val)
        if (val.length > 0) {
          if (!stringOptions.includes(val)) {
            stringOptions.push(val)
          }

          done(val, 'toggle')
        }
      },
      filterFn (val, update) {
        update(() => {
          if (val === '') {
            filterOptions.value = stringOptions
          }
   
          else {
            const needle = val.toLowerCase()
            filterOptions.value = stringOptions.filter(
              v => v.toLowerCase().indexOf(needle) > -1
            )
                          // console.log(needle)
                          // console.log(filterOptions.value)

          }
        })
      }
    }
  }, 
  data: () => ({
    items: [],
    filter: '',
    terms: '',
    columns,
    rows: [],
    Selected: [],
    list: [],
    needle: '',

  }),
  async created () {
    try {
      const res = await this.$api.get('/json/metadata.json')
      res.status === 200
        ? (this.items = res.data)
        : alert('there was an error getting items here')
    } catch (error) {
      alert('there was an error getting items at this location')
    }
  },
  computed: {
    filterProducts: function() {
      if (this.modelEdition > 0)
        return this.numberSearchFilter 
      else
        return this.myFilter
    }
  },
  methods: {
    navToAncientDetails (edition) {
      this.$router.push({ name: 'AncientDetails', params: { edition } })
    },
    buildFilter() {
      //Partially repairs q-table pagination by preventing filter from activating until a value is selected.
      //STILL BROKEN IF VALUE IS SELECTED THAT HAS MORE THAN ONE PAGE
      if (
        this.modelBackground.length > 0 ||
        this.modelSun.length > 0 ||
        this.modelSkin.length > 0 ||
        this.modelEyes.length > 0 ||
        this.modelLips.length > 0 ||
        this.modelFace.length > 0 ||
        this.modelGlasses.length > 0 ||
        this.modelJewelry.length > 0 ||
        this.modelHead.length > 0 ||
        this.modelEdition.length > 0
        ) 
      return  [ 
        this.modelBackground,
        this.modelSun,
        [],//this._ignore
        this.modelSkin,
        this.modelEyes,
        this.modelLips,
        this.modelFace,
        this.modelGlasses,
        this.modelJewelry,
        this.modelHead,
        this.modelEdition
      ];
    },
    myFilter (rows, filterValues) {
      return rows.filter(
        row => { 
          for (var i=0;i<=9;i++){ 
            if (filterValues[i].length && 
              !filterValues[i].some(filterValue => (row.attributes[i]).value.toLowerCase().includes(filterValue.toLowerCase())))
              return false;
          }
          return true;
        }
      )
    },
     numberSearchFilter(rows, terms, cols, cellValue) {
        console.log(filterOptions.value)
      const lowerTerms = filterOptions.value[filterOptions.value.length - 1]
              console.log(lowerTerms)
      return rows.filter(
        row => cols.some(col => (cellValue(col, row)).toLowerCase() === lowerTerms))
      
    },
  }})




       //row.editon is the number of the edition
      //          console.log(filterOptions.value)
      //          console.log(row.edition)

      // return rows.filter(
      //   row => { 
          // for (var e=0; e<=10000; e++){ 
            // if (filterOptions.value == row.edition)
            
            //   return false
          // for (row.edition; row.edition <= 10000; row.edition++) { 
          // if (filterValues.length && 
          //     !filterValues.some(filterValue => (row.edition).toString().indexOf(filterValue) > -1))
          // }
      //     return true;
      //     }
      //   )
      // },


      // return rows.filter(
      //   row => { 
      //     for (var i=0;i<=9;i++){ 
      //       if (filterValues[i].length && 
      //         !filterValues[i].some(filterValue => (row.attributes[i]).value.toLowerCase().includes(filterValue.toLowerCase())))
      //         return false;
      //     }
      //     return true;
      //   }
      // )
  

                  // row.edition.toString().includes(val)

         // else if (i == 10) {
            //     filterValue => (row.edition).value.toLowerCase().includes(filterValue.toLowerCase())
            //   return false;
            // }
          //row.edition
        // for (var j=0; j<=10000; j++){
        //   if (filterValues[j].length &&
        //     !filterValues[j].some(filterValue => (row.edition).value.toLowerCase().includes(filterValue.toLowerCase())))
        //     return false;
        // }
              // console.log('bailed at i:'+i+' for:'+row.name)
                          // console.log(row.attributes[1])

      //                             let lowerTerms = this.new-value.toLowerCase()
      //   let filteredRows = rows.filter(
      //     row => toFilter.some(col => (row[col] + '').toLowerCase().includes(lowerTerms))
      //   )
      // return filteredRows


</script>




