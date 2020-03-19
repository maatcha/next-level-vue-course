<template>
  <div>
    <h1>Uh-Oh !</h1>
    <h3>
      It's look like you're experiencing some network issues. Please click the
      Back button and try again
    </h3>
    <router-link :to="{ name: 'event-list' }"
      >Or go back to the Home Page</router-link
    >
  </div>
</template>
