<template>
  <div>
    
    <br />子组件
    <input
          ref="input"
          :value="value"
          @input="$emit('AnyName', $event.target.value)"
        >
  </div>
</template>
 
<script>
  export default {
      props: ["value"],
        model: {
            prop: 'value',
            event: 'AnyName'
        },
     data(){
            return{
                
            }
        },
       
 
  }
</script>
