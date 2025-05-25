
<script setup lang="ts">
import jsonData from './resume.json';
</script>

<template>
  <div class="gridboard">
    <div class="grid2 gridbox" :style="{ backgroundImage: 'url(\'/img/bg.png\')', backgroundPosition: 'center' }">
      <div :style="{ 
        display: 'grid', gridAutoRows: 'auto auto',
      }">
        <h3>Hi, My name is</h3>
        <h1 :style="{ marginTop: '0.1em' }">{{ jsonData.name }}</h1>
      </div>
    </div>
    <div class="grid1 gridbox">
       <ul v-for="role in jsonData.desp"">
        <p :style="{ marginBottom: '-1em' }">{{ role }}</p>
       </ul>  
    </div>
  </div>
  <div class="gridboard">
    <div class="gridbox grid1" :style="{ backgroundColor: '#145C9E' }">
       <h3>About me</h3>
       <br>
       <p>{{ jsonData.aboutMe[1] }}</p>
    </div>
    <div class="gridbox grid2" :style="{ backgroundColor: '#AF1B3F' }">
      <h3>My Skills</h3>
      <br>
      <p>{{ jsonData.aboutMe[0] }}</p>
      <br>
      <div v-for="skill in jsonData.skills" :style="{ padding: '18px' }">
        <h3>{{ skill.name }}</h3>
        <p>{{ skill.desp }}</p>
      </div>
    </div>
  </div>
  <div class="gridboard" :style="{ backgroundColor: '#20A4F3' }">
    <div class="gridbox grid1">
       <h3>Past Careers</h3>
    </div>
    <div class="grid2">
      <div v-for="work in jsonData.workExp">
        <div :style="{
          padding: '2em',
          margin: '1em',
          backgroundColor: '#2F3061',
          borderRadius: '12px'
        }">
          <p>{{ work.subtitle }}</p>
          <h3>{{ work.title }}</h3>
          <p>{{ work.descp }}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="gridboard">
    <div class="gridbox grid1">
       <h3>Contact</h3>
       <p>Ways to get touch with me</p>
    </div>
    <div class="grid2">
      <div :style="{
          padding: '2em',
          margin: '1em',
          backgroundColor: '#1b263b',
          borderRadius: '12px'
        }">
          <p>
            GitHub : <a href="https://github.com/"+{{ jsonData.contact.github }}>@{{ jsonData.contact.github }}</a>
          </p>
        </div>
        <div :style="{
          padding: '2em',
          margin: '1em',
          backgroundColor: '#1b263b',
          borderRadius: '12px'
        }">
          <p>
            E-mail : <a href="mailto:"+{{ jsonData.contact.email }}>{{ jsonData.contact.email }}</a>
          </p>
        </div>
        <div :style="{
          padding: '2em',
          margin: '1em',
          backgroundColor: '#1b263b',
          borderRadius: '12px'
        }">
          <p>
            LinkedIn : <a href={{ jsonData.contact.linkedin }}>{{ jsonData.contact.linkedin }}</a>
          </p>
        </div>
        <div :style="{
          padding: '2em',
          margin: '1em',
          backgroundColor: '#1b263b',
          borderRadius: '12px'
        }">
          <p>
            WhatsApp : <a href="https://wa.me/"+{{ jsonData.contact.whatsapp }}>@{{ jsonData.contact.whatsapp }}</a>
          </p>
        </div>
    </div>
  </div>
  <div id="panel">
    <p>Scroll down to look more</p>
  </div>
</template>

