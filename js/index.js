{
  let view={
    el:'#doraemon',
    template:`
    .doraemon{
      position: absolute;
      left:40px;
      width: 500px;
      height: 500px;
    }
    
    header{
      width: 240px;
      height: 240px;
      position: absolute;
      background-color: #00A1FF;
      border: 2px solid #000;
      border-radius: 48% 48% 50% 50%;
    }
    
    `,
    init(){
      
    },
    render(time){
     
      $('#styleTag').html(this.template)
      console.log( $('#styleTag'))
    }
  }
  let model={}
  let controller={
    init(view,model){
      this.view=view
      this.model=model
      this.$el=$(this.view.el)
      this.view.init()
      this.startRender(10)
      
    },
    startRender(time){
      this.view.render(time)
    }
  }
  controller.init(view,model)
}