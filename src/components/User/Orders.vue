<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3 mt-3">Orders</h1>
        <v-list subheader two-line flat>
          <v-list-item v-for="order in orders" :key="order.id">
            <v-list-item-action>
              <v-checkbox
                :input-value="order.done"
                color="primary"
                @click="markDone(order)"
              >
              </v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>{{ order.name }}</v-list-item-title>
              <v-list-item-subtitle>{{
                order.description
              }}</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn class="primary" :to="'/ad' + order.adId">Open</v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      orders: [
        {
          id: "123",
          name: " Чатырдаг",
          description: "Один день, 12 км, сложность: легкая",
          adId: "1",
          done: true,
        },
        {
          id: "124",
          name: "Караби",
          description: "Два дня, 20 км, сложность: легкая",
          adId: "2",
          done: true,
        },
        {
          id: "125",
          name: "Новый свет",
          description: "Один день, 15 км, сложность: средняя",
          adId: "3",
          done: true,
        },
        {
          id: "126",
          name: "Северная Демерджи",
          description: "Один день, 13 км, сложность: легкая",
          adId: "4",
          done: true,
        },
      ],
    };
  },
  methods: {
    markDone(order) {
      order.done = !order.done;
      console.log(order.done);
    },
  },
};
</script>
