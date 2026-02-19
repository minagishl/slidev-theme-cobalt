<template>
  <div class="slidev-layout frame title-sandwich">
    <div class="frame-content">
      <div class="title-top"><slot name="top" /></div>
      <div class="title-main"><slot /></div>
      <div class="title-footer"><slot name="footer" /></div>
    </div>
  </div>
</template>
