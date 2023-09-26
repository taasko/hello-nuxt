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

    <footer>&copy;</footer>
  </div>
</template>
