<template>
	<ul class="nav-bar__list _conteiner-1200">
		<li class="nav-bar__item ">
			<a v-on:click.prevent class="nav-bar__link active" href="#">Reviews</a>
		</li>
		<li class="nav-bar__item">
			<a v-on:click.prevent class="nav-bar__link" href="#">Specification</a>
		</li>
		<li class="nav-bar__item">
			<a v-on:click.prevent class="nav-bar__link" href="#">Descrition</a>
		</li>
	</ul>
</template>


<script>
export default {};
</script>

<style lang="scss" scoped>


.nav-bar {
	&__list {
		padding: 0 15px;
		height: 100%;
		display: flex;
	}
	&__item {
        height: 100%;
       
	}
	&__link {
		text-decoration: none;
		font-family: $poppins-semi-bold;
		font-size: $text-primary;
        text-transform: uppercase;
        height: 100%;
		display: flex;
        align-items: center;
        margin-right: 80px;
        color: $grey-primary;
        border-bottom: 2px solid transparent;
        &.active {
            color: $blue-primary;
            border-color: $blue-primary;
		}
	}
}
</style>