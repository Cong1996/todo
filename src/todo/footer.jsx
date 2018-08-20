import '../styles/footer.styl'
export default{
	data(){
		return{
			author:'You'
		}
	},
	render(){
		return(
			<div id="footer">
			<span>Written By {this.author}</span>
			</div>
		)
	}
}