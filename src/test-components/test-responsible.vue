<template>
<div class="test-wrapper">
    <testEl/>
</div>
  
</template>

<script>
import testEl from '@/components/main-menu/menu-main'

export default {
    components: {
        testEl,
    }

};
</script>

<style lang='scss' scoped>
.test-wrapper {
    background-color: rgb(63, 63, 63);
    width: 100%;
    height:500px;
}
</style>