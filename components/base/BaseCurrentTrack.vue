<template>
	<div class="current-track">
		<!-- Вынести в компонент -->
		<div class="track-about">
			<img class="track-about__image" src="@/assets/images/track.jpg" />
			<div class="track-about__text">
				<h3 class="track-about__name">Name</h3>
				<h4 class="track-about__artist">artist</h4>
				<span class="track-about__duration">00:00</span>
			</div>
		</div>
		<BaseTrackController />
	</div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
@use '@/assets/scss/_fonts.scss';
.current-track {
	padding: 20px 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	.track-about {
		display: flex;
		column-gap: 10px;

		&__image {
			max-width: 64px;
			border-radius: 8px;
		}

		&__text {
			display: flex;
			flex-direction: column;
		}

		&__name {
			@include fonts.text-headline-h3;
		}
		&__artist {
			@include fonts.text-body-description;
		}
		&__duration {
			@include fonts.text-body-description;
		}
	}
}
.track-about {
}
</style>
