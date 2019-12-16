<template>
	<nav class="navbar is-fixed-top" role="navigation" id="navigation">
		<div class="navbar-menu" :class="{ 'is-active': isShown }">
			<div class="navbar-start">
				<a class="navbar-item" href="#about" @click="isShown = !isShown">
					<strong>About</strong>
				</a>
				<a class="navbar-item" href="#technology" @click="isShown = !isShown">
					<strong>Technology</strong>
				</a>
				<a class="navbar-item" href="#articles" @click="isShown = !isShown">
					<strong>Articles</strong>
				</a>
				<a class="navbar-item" href="#contact" @click="isShown = !isShown">
					<strong>Contact</strong>
				</a>
			</div>
		</div>
		<a
			@click="isShown = !isShown"
			class="navbar-burger"
			:class="{ 'is-active': isShown }"
		>
			<span aria-hidden="true"></span>
			<span aria-hidden="true"></span>
			<span aria-hidden="true"></span>
		</a>
	</nav>
</template>

<script>
export default {
	name: "navigation",
	data() {
		return {
			isShown: false,
		};
	},
};
</script>

<style></style>
