
document.addEventListener('dragover',function(event){
    event.preventDefault();
    return false;
  },false);

  document.addEventListener('drop',function(event){
    event.preventDefault();
    return false;
  },false);
  

jQuery(document).ready( function() {

			//playボタンをおした時の動作
	      $("button.play").on('click',function(){
		      
		    var targetVideoId = $(this).parent('div').attr('data-role');
			var video = $('#'+targetVideoId)[0];
			if (video.paused) {
				video.play();
				$(this).html('<i class="fa fa-pause"></i>');
       		} else {
	   			video.pause();
	   			$(this).html('<i class="fa fa-play"></i>');
       		}


	      });
	      

	      $("button.restart").on('click',function(){
		    var targetVideoId = $(this).parent('div').attr('data-role');
			var video = $('#'+targetVideoId)[0];
			video.currentTime = 0;
  
		   });

	      $("button.rew").on('click',function(){
		    var targetVideoId = $(this).parent('div').attr('data-role');
			var video = $('#'+targetVideoId)[0];
			video.currentTime -= 0.1;
  
		   });
	      $("button.fastFwd").on('click',function(){
		    var targetVideoId = $(this).parent('div').attr('data-role');
			var video = $('#'+targetVideoId)[0];
			video.currentTime += 0.1;
  
		   });


	      $("button#Pplay").on('click',function(){
			var video1 = $('#Video1')[0];
			var video2 = $('#Video2')[0];
			if (video1.paused) {
				video1.play();
				video2.play();
				$(this).html('<i class="fa fa-pause"></i>');
				$('#btPlay1').html('<i class="fa fa-pause"></i>');
				$('#btPlay2').html('<i class="fa fa-pause"></i>');
       		} else {
	   			video1.pause();
	   			video2.pause();
	   			$(this).html('<i class="fa fa-play"></i>');
				$('#btPlay1').html('<i class="fa fa-play"></i>');
				$('#btPlay2').html('<i class="fa fa-play"></i>');
       		}

		      
		   });

	      $("button#Prestart").on('click',function(){
			var video1 = $('#Video1')[0];
			var video2 = $('#Video2')[0];
			video1.currentTime = 0;
			video2.currentTime = 0;
  
		   });

	      $("button#Prew").on('click',function(){
			var video1 = $('#Video1')[0];
			var video2 = $('#Video2')[0];
			video1.currentTime -= 0.1;
 			video2.currentTime -= 0.1;
  
		   });
	      $("button#PfastFwd").on('click',function(){
			var video1 = $('#Video1')[0];
			var video2 = $('#Video2')[0];
			video1.currentTime += 0.1;
			video2.currentTime += 0.1;
  
		   });


		   //動画ファイルをvideoタグのsourceにセット
		   function attachVideo(srcPath,targetId){
			var targetObj = $('#'+targetId);
			$('#'+targetId+' > source').attr('src', srcPath);
			$('#'+targetId+'box').css('display','block');

			$('#'+targetId).load();

		   }

		   $('html').ondrop = function (e) {
				e.preventDefault(); // イベントの伝搬を止めて、アプリケーションのHTMLとファイルが差し替わらないようにする
				return false;
			}

			$('.holder').each(function(){
				
				var holder = $(this)[0];
				var elmId =  $(this).attr('data-target');
				
				
				/** hoverエリアにドラッグされた場合 */
				holder.ondragover = function () {
					$(this).css('opacity',0.5);
					$('#'+elmId).css('opacity',0.5);
					return false;
				};

				/** hoverエリアから外れた or ドラッグが終了した */
				holder.ondragleave = holder.ondragend = function () {
					$(this).css('opacity',1);
					$('#'+elmId).css('opacity',1);
					holder.innerText = '';
					return false;
    			};

				/** hoverエリアにドロップされた */
				holder.ondrop = function (e) {
					e.preventDefault(); // イベントの伝搬を止めて、アプリケーションのHTMLとファイルが差し替わらないようにする
					$(this).css('border','none');
					$(this).css('opacity',0);
					$('#'+elmId).css('opacity',1);

					var file = e.dataTransfer.files[0];
					holder.innerText = '';
					
					attachVideo(file.path,elmId);
					
					return false;
				};

			});
				
			$(window).resize(function() {
					setMonitorHieght();			
			});
			
			setMonitorHieght();		
			
			function setMonitorHieght(){
				var height = $('#monitor .videobox').height();
				$('#monitor').css('height',height);
				$('.holder').css('height',height - 30);
			}


});