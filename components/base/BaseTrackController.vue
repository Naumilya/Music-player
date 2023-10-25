<template>
	<div class="track-player">
		<div class="track-player__buttons">
			<button class="track-player__previous">
				<i class="material-icons"> skip_previous </i>
			</button>
			<button class="track-player__play">
				<i class="material-icons"> play_arrow </i>
			</button>
			<button class="track-player__next">
				<i class="material-icons"> skip_next </i>
			</button>
			<button class="track-player__mute">
				<i class="material-icons"> volume_up </i>
			</button>
			<button class="track-player__more-vert">
				<i class="material-icons"> more_vert </i>
			</button>
		</div>
		<div class="track-player__progress">
			<span class="track-player__duration"></span>
			<span class="track-player__progress-bar"> </span>
		</div>
	</div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
@use '@/assets/scss/_mixins.scss';
@use '@/assets/scss/_colors.scss';

.track-player {
	&__buttons {
		display: flex;
		column-gap: 5px;
		align-items: center;
	}
	&__previous {
		@include mixins.controll-cyrcle-button(24px, transparent);
	}
	&__play {
		@include mixins.controll-cyrcle-button(32px, colors.$primary-color);
	}
	&__next {
		@include mixins.controll-cyrcle-button(24px, transparent);
	}
	&__mute {
		@include mixins.controll-cyrcle-button(24px, transparent);
	}
	&__more-vert {
		@include mixins.controll-cyrcle-button(24px, transparent);
	}

	&__progress {
	}
	&__duration {
	}
	&__progress-bar {
	}
}
</style>
