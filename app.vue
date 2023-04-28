<script lang="ts" setup>
import { ITheme } from './utils/theme'
const theme = useState<ITheme>('theme.current')
</script>

<template>
  <Html :class="`${theme === 'dark' ? 'dark' : ''}`">
    <Body class="bg-green">
      <NuxtLayout>
        hello
        <NuxtLoadingIndicator :height="5" :duration="3000" :throttle="400" />
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>
