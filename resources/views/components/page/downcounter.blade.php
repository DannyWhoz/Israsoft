<div class="m-auto grid grid-flow-col gap-5 text-center auto-cols-max justify-center mt-10 text-white">
    <div class="flex flex-col">
      <span class="countdown font-mono text-5xl">
        <span id="days" style="--value:100;"></span>
      </span>
      {{ __('days') }}
    </div>
    <div class="flex flex-col">
      <span class="countdown font-mono text-5xl">
        <span id="hours" style="--value:100;"></span>
      </span>
      {{ __('hours') }}
    </div>
    <div class="flex flex-col">
      <span class="countdown font-mono text-5xl">
        <span id="min" style="--value:100;"></span>
      </span>
      {{ __('min') }}
    </div>
    <div class="flex flex-col">
      <span class="countdown font-mono text-5xl">
        <span id="sec" style="--value:100;"></span>
      </span>
      {{ __('sec') }}
    </div>
</div>
