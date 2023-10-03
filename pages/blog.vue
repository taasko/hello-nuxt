<template>
  <Head>
    <Title>Blog</Title>
    <Meta name="description" content="My blog." />
  </Head>

  <section>
    <h1>Blogs</h1>

    <ContentList v-slot="{ list }">
      <div v-for="article in list" :key="article._path">
        <h2>{{ article.title }}</h2>
        <p>{{ article.description }}</p>

        <NuxtLink :to="article._path">Read more...</NuxtLink>
      </div>
    </ContentList>
  </section>
</template>
