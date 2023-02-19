<template>
	<v-app>
		<div class="app-wrap">
			<div class="app">
				<b>Пожалуйста, оцените удобство работы с приложением</b>
				<v-rating v-model="rating" :min="1" color="amber" class="my-4"></v-rating>
				<v-form ref="form" v-model="valid" @submit.prevent>
					<v-text-field v-model="email" :rules="[v => !!v || 'Пожалуйста заполните это поле']"
						placeholder="Введите электронный адрес" background-color="#fff" outlined></v-text-field>
					<v-textarea v-if="rating < 5" v-model="comment"
						placeholder="Поделитесь мыслями, что можно было бы улучшить (не обязательно)" background-color="#fff"
						outlined></v-textarea>
					<v-btn @click="send" :disabled="loading" color="teal" dark block>Отправить отзыв</v-btn>
				</v-form>
			</div>
		</div>

		<v-snackbar v-model="snackbar" :timeout="3000" :color="msgColor">
			<div v-if="msgColor == 'success'">Спасибо за отзыв!</div>
			<div v-else>При отправке отзыва произошла ошибка</div>
		</v-snackbar>
	</v-app>
</template>

<script>
export default {
	name: 'App',
	data: () => ({
		rating: 5,
		email: '',
		comment: '',
		valid: false,
		loading: false,
		snackbar: false,
		msgColor: null,
	}),
	methods: {
		async send() {
			this.$refs.form.validate()
			if (!this.valid) return
			this.snackbar = false;
			this.loading = true;
			const url = 'https://beta.elcomspb.ru/api/test'
			let response = await fetch(url);
			this.loading = false;
			let status = await response.json();
			this.msgColor = status.res == 'failure' ? 'error' : status.res
			this.snackbar = true;
		},
	}
};
</script>

<style lang="scss">
.v-application--wrap {
	min-height: auto !important;
}
.app-wrap {
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100%;
	background-color: #fafafa;
}

.app {
	padding: 20px;
	max-width: 800px;
	width: 100%;
	margin: 20px;
	text-align: center;
}

.v-btn {
	text-transform: none;
	letter-spacing: normal;
}
</style>
