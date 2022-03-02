imgComp
},
data() {
  return {
    items: [],
    show: true
    }},
  methods: {
    onLoad()  { 
    for (let i = 0; i < 10001; i++)    
    this.items = i;
    }}}
    