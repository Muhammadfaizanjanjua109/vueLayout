<script>
export default {
    data(){
        return {
            cardData : [
  {
    name: 'Faizan',
    subtitle: 'Frontend Dev',
    description: 'Some quick example text to build on '
  },
  {
    name: 'John',
    subtitle: 'Backend Dev',
    description: 'Another description for the second dummy data.'
  },
  {
    name: 'Alice',
    subtitle: 'UX Designer',
    description: 'Description for the third dummy data.'
  },
  {
    name: 'Bob',
    subtitle: 'Product Manager',
    description: 'Description for the fourth dummy data.'
  },
  {
    name: 'Eva',
    subtitle: 'Full Stack Dev',
    description: 'Description for the fifth dummy data.'
  },
  {
    name: 'Mike',
    subtitle: 'Data Scientist',
    description: 'Description for the sixth dummy data.'
  },
  {
    name: 'Sara',
    subtitle: 'UI Designer',
    description: 'Description for the seventh dummy data.'
  },
  {
    name: 'Alex',
    subtitle: 'DevOps Engineer',
    description: 'Description for the eighth dummy data.'
  },
  {
    name: 'Olivia',
    subtitle: 'QA Engineer',
    description: 'Description for the ninth dummy data.'
  },
  {
    name: 'Daniel',
    subtitle: 'Mobile App Developer',
    description: 'Description for the tenth dummy data.'
  },
]

        }
    }
}
</script>
<template>
  <div>
    <div class="row">
        <div   v-for="(card, index) in cardData" :key="index" class="col-lg-3 col-md-4 col-sm-12">
            <div class="card mt-3">
  <div class="card-body">
    <h5 class="card-title">{{ card.name }}</h5>
    <h6 class="card-subtitle mb-2 text-muted">{{ card.subtitle }}</h6>
    <p class="card-text">{{ card.description }}</p>

  </div>
</div>
        </div>
    </div>
  </div>
</template>