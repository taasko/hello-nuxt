<template>
  <div>
    <Head>
      <Title>Homepage</Title>
      <Meta name="description" content="My homepages." />
    </Head>

    <header>
      <nav>
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/blog">Blog</NuxtLink></li>
        </ul>
      </nav>
    </header>

    <slot></slot>

    <br />

    <footer>&copy;</footer>
  </div>
</template>

<style scoped>
ul li {
  margin: 0 0.75em 0.75em 0;
}
</style>
