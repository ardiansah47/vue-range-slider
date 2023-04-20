<template>
  <div class="range-slider">
    <input
      class="range-slider__thumb range-slider__thumb--min"
      :class="zIndexClass"
      type="range"
      :value="range[0]"
      :min="min"
      :max="max"
      @input="onInputMin"
    />
    <input
      class="range-slider__thumb range-slider__thumb--max z-20"
      type="range"
      :value="range[1]"
      :min="min"
      :max="max"
      @input="onInputMax"
    />
    <div class="range-slider__track"></div>
    <div class="range-slider__bar"></div>
  </div>
</template>
<script>
export default {
  props: {
    range: {
      type: Array,
      default: () => [0, 100]
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    }
  },
  watch: {
    range() {
      this.setBarWidth()
    }
  },
  computed: {
    zIndexClass(){
      return this.range[0] === this.max ? 'z-30' : 'z-10'
    }
  },
  mounted() {
    this.setBarWidth()
  },
  methods: {
    onInputMin(event) {
      const minValue = Math.min(+event.target.value, this.range[1])
      this.$emit('update:range', [minValue, this.range[1]])
    },
    onInputMax(event) {
      const maxValue = Math.max(+event.target.value, this.range[0])
      this.$emit('update:range', [this.range[0], maxValue])
    },
    setBarWidth() {
      const elRange = document.querySelectorAll('.range-slider__bar')

      elRange.forEach((el) => {
        const getPercent = (numb) => {
          return Math.round(((numb - this.min) / (this.max - this.min)) * 100)
        }
        const minPercent = getPercent(this.range[0])
        const maxPercent = getPercent(this.range[1])
        el.style.left = `${minPercent}%`
        el.style.width = `${maxPercent - minPercent}%`
      })
    }
  }
}
</script>
<style lang="scss">
.range-slider {
  position: relative;
  width: 100%;
  min-height: 10px;

  &__thumb {
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
    width: 100%;
    position: absolute;
    pointer-events: none;
    height: 0;
    outline: none;
    @-moz-document url-prefix() {
      top: 2px;
    }

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      border: 2px solid white;
      pointer-events: all;
      @apply cursor-pointer relative rounded-full bg-primary -mb-[4px] w-[18px] h-[18px];
    }
    @-moz-document url-prefix() {
      &::-moz-range-thumb {
        -webkit-appearance: none;
        border: 2px solid white;
        pointer-events: all;
        @apply cursor-pointer relative rounded-full bg-primary -mb-[4px] w-[14px] h-[14px];
      }
    }
  }

  &__track {
    @apply bg-gray-300 w-full rounded h-[5px] absolute;
    z-index: 1;
  }

  &__bar {
    @apply bg-primary w-full rounded h-[5px] absolute;
    z-index: 2;
  }
}
</style>
