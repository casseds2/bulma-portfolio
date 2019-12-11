document.addEventListener("DOMContentLoaded", async function(event) {
	new Vue({
		el: "#contact",
		data: {
			name: "",
			email: "",
			message: "",
		},
		methods: {
			async sendMessage() {
				await fetch("/contact", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						name: this.name,
						email: this.email,
						message: this.message,
					}),
				});
				alert("Your Message Has Been Sent!");
			},
			resetField() {
				this.name = "";
				this.email = "";
				this.message = "";
			},
		},
	});

	new Vue({
		el: "#navigation",
		data: {
			isShown: false,
		},
	});
});
