<template>
	<div class="track-player">
		<div class="track-player__buttons">
			<button class="track-player__previous">
				<i class="material-icons"> skip_previous </i>
			</button>
			<button class="track-player__play" @click="isPlaying = !isPlaying">
				<i class="material-icons material-icons_black" v-if="!isPlaying">
					play_arrow
				</i>
				<i class="material-icons material-icons_black" v-else> pause </i>
			</button>
			<button class="track-player__next">
				<i class="material-icons"> skip_next </i>
			</button>
			<button class="track-player__mute" @click="isVolume = !isVolume">
				<i class="material-icons" v-if="!isVolume"> volume_up </i>
				<i class="material-icons" v-else> volume_down </i>
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

<script lang="ts" setup>
const isPlaying = ref(false);
const isVolume = ref(false);
</script>

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
		@include mixins.controll-cyrcle-button(38px, colors.$primary-color);
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

	.material-icons_black {
		color: colors.$black-color;
	}
}
</style>
