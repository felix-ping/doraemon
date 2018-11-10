{
  let view={
    el:'#doraemon',
    template:`
    html{
      background: #eee;
      transition: all 1s;
    }
    #code{
      border: 1px solid #aaa;
      padding: 16px;
    }
    /* 我需要一点代码高亮 */
    .token.selector{ color: #690; }
    .token.property{ color: #905; }
    .token.function{
    }
    /* 加一个呼吸效果 */
    #code{
      animation: breath 2s infinite alternate-reverse;
    }
    /* 加上3D效果 */
    html{
      perspective: 1000px;
    }
    #codeWrapper{
      border: 1px solid;
      transform: rotateY(10deg) translateZ(-100px) ;
    }
    #paper > .content {
      display: block;
    }


    /* 现在我用CSS画一个哆啦A梦给你看 */
    header{
      background-color: #00A1FF;
      border: 2px solid #000;
    }
    .face{
      background-color: #fff;
      border: 2px solid #000;
    }
    .left_eye,.right_eye{
      background-color: #fff;
      border:2px solid #000;
    }
    .left_eye:before,.right_eye:before{
      background-color: #000;;
    }
    .nose{
      background-color: #f00;;
      border: 2px solid #000;
    }
    .nose:before{
      background-color: #fff;
      box-shadow: -3px 2px 5px 5px rgba(255,255,255,0.2) inset;
    }
    .left_whiskers,.right_whiskers{
      background-color: #000;
    }
    .left_whiskers:before,.right_whiskers:before{
      background-color: #000;
    }
    .left_whiskers:after,.right_whiskers:after{
      background-color: #000;
    }
    
    .mouth{
      border: 2px solid #000;
      border-radius: 50%;
    }
    .mouth:before{
      background-color: #fff;
    }
    .mouth:after{
      background-color: #000;	
    }
    
    .body{
      background-color: #00A1FF;
    }
    .body:before{
      background-color: rgb(18,24,33);
      border: 2px solid #000;
    }
    .body:after{
      background-color:#00A1FF;
      border-left: 2px solid #000;
      border-right: 2px solid #000;
    }
    
    .necklet{
      background-color: #B22D00;
      border: 2px solid #000;
    }

    .bell{
      background-color: #FBE405;
      border: 2px solid #000;
    }
    .bell_light{
      background-color: #fff;
      box-shadow: -2px 3px 5px 5px rgba(255,255,255,0.6);
    }
    .bell_line{
      border-top: 2px solid #000;
      border-bottom: 2px solid #000;
    }
    .bell_circle{
      background-color: #000;
    }
    .bell_chink{
      background-color: #000;
    }
    .left_arm,.right_arm{
      border-top: 2px solid #000;
      border-bottom: 2px solid #000;
      background-color: #00A1FF;
    }
    .left_hand,.right_hand{
      background-color: #fff;
      border: 2px solid #000;
    }
    .clothes{
      background-color: #fff;
      border: 2px solid #000;
    }
    .clothes:before{
      background-color: #fff;
    }
    
    .pocket{
      background-color: #fff;
      border: 2px solid #000;
    }
    .pocket:before{
      background-color: #fff;
      border-bottom: 2px solid #000;
    }
    
    .left_foot,.right_foot{
      background-color: #fff;
      border: 2px solid #000;
    }
    
    `,
    data: {
      time: 20,
    },
    init(){
      
    },
    render(html){
      
      $('#code').html(Prism.highlight(html, Prism.languages.css))
      $('#codeWrapper').scrollTop($('#codeWrapper')[0].scrollHeight)  
      $('#styleTag').html(html)   
    }
  }
  let model={}
  let controller={
    init(view,model){
      this.view=view
      this.model=model
      this.data=this.view.data
      this.$el=$(this.view.el)
      this.view.init()
      this.clickEvents() 
      this.startRender()
    },
    startRender(){
      let n=0
      let clock=()=>{
        let html =this.view.template.substr(0, n)
        n += 1
        this.view.render(html)
        if (n <= this.view.template.length){
          if(this.data.time=== 'skip'){
            return this.view.render(this.view.template)
          }
          id= setTimeout(clock, this.data.time)
        }else {}
      }
      let id= setTimeout(clock, this.data.time);
    },
    clickEvents(){
      $('.speed').on('click', (e) => {
        let time = $(e.target).attr('data-id')
        if (time === 'skip') {
          this.data.time = time
        } else {
          this.data.time = time
        }
      }) 
    }
  }
  controller.init(view,model)
}