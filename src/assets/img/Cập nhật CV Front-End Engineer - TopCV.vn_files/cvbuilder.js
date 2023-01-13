function loadCvLayout(cvId,template,lang,change_lang,checkRecovery,recovery)
{var url=LOAD_TEMPLATE_URL;var data=CVOFormController.getTemporaryFormData();data._token=getToken();data.template_name=template;data.lang=lang;data.change_lang=0;const urlParams=new URLSearchParams(window.location.search);let font=urlParams.get('font');let color=urlParams.get('color');data.font=font;data.color=color;if(recovery){data.recovery=1;}
if(checkRecovery){data.checkRecovery=1;}
if(cvId!=''){data.cv_id=cvId;url=LOAD_TEMPLATE_EDIT_URL;}
if(change_lang){data.change_lang=1;}
$.ajax({url:url,data:data,type:'post',dataType:'json',beforeSend:function(){showLoading();},success:function(response){if(response.status=='success'){builder=response.builder;loadColor(builder);loadFont(builder);loadFontSize(builder);loadSpacing(builder);$('#cv-layout').html(response.view).show(0,function(){initCVBuilder();});if(response.url!=undefined){history.replaceState(null,null,response.url);}}
hideLoading();},error:function(error){hideLoading();alert('Lỗi');}});}
var totalJobs=0;var suggestJobsDone=0;$('#link-close-modal-change-lang').click(function(event){event.preventDefault();$('#modal-change-lang').modal('hide');});function changeLang(lang){hideTemplateContainer();hideLayoutEditor();$('#cvo-toolbar span.flag').removeClass('active');builder.lang=lang;change_lang=1;$('#cvo-toolbar span.flag.'+lang).addClass('active');$('#link-close-modal-change-lang').trigger('click');loadCvLayout(builder.cv_id,builder.template,builder.lang,change_lang);ta("change_language_1.0")}
$(document).ready(function(){var isClickUrl=false;$('a').click(function(event){isClickUrl=true;});$(window).bind('beforeunload',function(e){if(isClickUrl){return undefined;}
return "Bạn đang sửa CV, bạn chắc chắn muốn rời khỏi trang này?";});$('#cvo-toolbar span.flag').click(function(){var lang=$(this).data('lang');if(builder.lang!=lang){$('#link-change-lang').attr('href',"javascript:changeLang('"+lang+"')");$('#modal-change-lang').modal('show');};});$('#template-container .template').click(function(){if($(this).hasClass('active')&&builder.template==$(this).data('name')){hideTemplateContainer();showFooter();return;}
if($(this).data('upgrade')){$('#modal-upgrade').modal();return;}
$('#template-container .template').removeClass('active');$(this).addClass('active');hideTemplateContainer();showFooter();builder.template=$(this).data('name');loadCvLayout(builder.cv_id,builder.template,builder.lang);ta("change_template_1.0");});$(document).on('click','#cvo-toolbar span.color',function(){hideTemplateContainer();hideLayoutEditor();$('#cvo-toolbar span.color').removeClass('active');$(this).addClass('active');var color=$(this).data('color');$('#cv-scheme-css').attr('href',builder.color_path+"/"+color+".css?v="+(TEMPLATE_CSS_VERSION||'2.2.8'));$('#cvColorScheme').val(color);ta("change_color_1.0")});$(document).on('click','#cvo-toolbar span.fontsize',function(){$('#cvo-toolbar span.fontsize').removeClass('active');$(this).addClass('active');var size=$(this).data('size');$('#cv-font-size-css').attr('href',builder.fontsize_path+"/font_"+size+".css");$('#cvFontSize').val(size);ta("change_size_1.0")});$(document).on('click','#cvo-toolbar span.line-height',function(){$('#cvo-toolbar span.line-height').removeClass('active');$(this).addClass('active');var spacing=$(this).data('spacing');$('#cv-spacing-css').attr('href',builder.spacing_path+"/spacing_"+spacing+".css");$('#cvSpacing').val(spacing);ta("change_line_height_1.0")});$('#btn-edit-layout').click(function(){if($(this).hasClass('active')){hideLayoutEditor()}else{hideTemplateContainer();showLayoutEditor();}
ta("button_add_block_1.0")});$('#btn-change-template').click(function(){if($(this).hasClass('active')){hideTemplateContainer();showFooter();}else{showTemplateContainer();hideLayoutEditor();hideFooter();}
ta("button_change_template_1.0")});var cvSuggestionInner=$('#cv-suggestion-inner');$(document).scroll(function(event){if($(document).scrollTop()<80){$('#cvo-toolbar').removeClass('fixed');cvSuggestionInner.removeClass('fixed');cvSuggestionInner.css({'margin-top':'',})}else{$('#cvo-toolbar').addClass('fixed');cvSuggestionInner.addClass('fixed');if($(document).scrollTop()+60>$('footer').offset().top-cvSuggestionInner.height()){var marginTOp=$(document).scrollTop()+70-($('footer').offset().top-cvSuggestionInner.height());marginTOp+=25;cvSuggestionInner.css({'margin-top':'-'+marginTOp+'px',})}else{cvSuggestionInner.css({'margin-top':'0px',})}}});$('#btn-edit-cv').click(function(e){e.preventDefault();$('#cv-message').hide();$("#cvbuilder-container").show();$("#cvo-toolbar").show();$('#save-done').hide();});$('#btn-template-cancel').click(function(e){hideTemplateContainer();});});function showLayoutEditor()
{LayoutEditorControler.init();$('#btn-edit-layout').addClass('active');$('#layout-editor-container').show();$(document).scrollTop(0);}
function hideLayoutEditor()
{$('#btn-edit-layout').removeClass('active');$('#layout-editor-container').hide();LayoutEditorControler.init();}
function showFooter()
{$('footer').show();}
function hideFooter()
{$('footer').hide();}
function showTemplateContainer()
{$('#btn-change-template').addClass('active');$('#template-container').show();$(document).scrollTop(0);}
function hideTemplateContainer()
{$('#btn-change-template').removeClass('active');$('#template-container').hide();}
function initCVBuilder()
{CVOFormUtils.promptRating(cvoPromptStars);CVOFormUtils.alertHandler(function(v,t){if(t===undefined)t='info';switch(t){case 'error':alertError(v);break;case 'warning':alertWarning(v);break;default:alertInfo(v);break;}});function alertInfo(messages){}
function alertError(messages){txt='<ul>';$.each(messages,function(index,value){txt+='<li>'+value+'</li>';});txt+='</ul>';$('.suggest-default').hide();$('#cv-message .content').html('<p>Kiểm tra lại các lỗi trong CV:</p> <b>'+txt+'</b><p style="margin:5px 0 0 0">Và bấm lại nút lưu CV</p>');$('#cv-message').removeClass('info').removeClass('warning').addClass('error').slideDown(100);}
function alertWarning(messages){}
CVOFormUtils.suggestions(suggestions);CVOFormUtils.bindSuggestControlHandler(function(suggestType){switch(suggestType){default:$('.suggestion-popup').popup('show');break;}});CVOFormUtils.bindValidationMessagesHander(cvoValidationErrorsDialog);CVOFormController.init(cvoMeta,cvoMaster,cvoDefaultLayout,initialLayout,function(){LayoutEditorControler.init(true);CVOFormUtils.bindShowLayoutEditorHandler(showLayoutEditor);CVOFormUtils.bindHideLayoutEditorHandler(hideLayoutEditor);CVOFormUtils.bindEditorOnHandler(editorOn);CVOFormUtils.bindEditorOffHandler(editorOff);initHackCvTitle();});if($('[cvo-form-field][type=text]').length>0){$(window).scrollTop(0);}}
function suggestions(type,value,element)
{$(element).focus(function(){switch(type){case 'freetext':suggestFreetext(value);break;case null:hideSuggest();break;default:suggestFull(type,value);break;}});}
function suggestFull(type,value)
{var message=$(".suggest-"+type).html();if(type===undefined||type===null){hideSuggest();return;}
if(value!==null){message=value;}
showSuggest(message);}
function suggestFreetext(value)
{if(value!==null){showSuggest(value);}}
function showSuggest(message)
{$('#cv-suggestion-content').html(message);$('#cv-suggestion-default').hide();}
function hideSuggest()
{$('#cv-suggestion-content').html('');$('#cv-suggestion-default').show();}
function suggestJobsTopCV()
{var limit=15;var noResult="Hiện tại chưa có công việc nào phù hợp với bạn!<br> Bạn có thể gửi email tới hotro@topcv.vn để nhận được hỗ trợ tốt hơn.";var suggestJobsTopCV=new Vue({el:'#topcv-jobs',data:{loading:false,jobs:[],savedJobIds:[]},methods:{loadJobs:function(){$.get(window.ROUTE_JOB_SUGGESTION_AI,{'context':window.JOB_RECOMMEND_AFTER_SAVE_SV,'cv_id':builder.cv_id,'ta_source':'AfterSaveCv'},function(response){suggestJobsTopCV.loading=false;if(response.status=='success'){suggestJobsTopCV.jobs=response.data.jobs;suggestJobsTopCV.savedJobIds=response.data.save_job_ids}
Vue.nextTick(function(){$('.container-scroll').each(function(){var ps=new PerfectScrollbar($(this)[0],{wheelPropagation:true,});});let jobRenderedIds=[];let scopeJobPositionMapping={};$('.job-ta').each(function(index,el){let jobId=$(el).data('job-id');jobRenderedIds.push(jobId);scopeJobPositionMapping[jobId]=parseInt(index)+1;});jobPositionMapping=scopeJobPositionMapping;if(jobRenderedIds.length){ta('jobRendered',{renderAt:new Date().getTime(),page:'JobDetail',box:'JobSuggest',jobIds:jobRenderedIds,})}
updateJobInViewPort();})});},},});suggestJobsTopCV.loadJobs();}
var viecNgayJobContainer=$('.viecngay-jobs');function destroyViecNgayPinto(){if(viecNgayJobContainer.hasClass('pinto-loaded')){viecNgayJobContainer.pinto('destroy').removeClass('pinto-loaded');}}
function initViecNgayPinto(){viecNgayJobContainer.pinto({itemWidth:256,gapX:30,gapY:30,}).addClass('pinto-loaded');}
function suggestJobsViecNgay()
{$.ajax({url:VIECNGAY_SUGGEST_JOB_API,dataType:'json',beforeSend:function(){$('.viecngay-loader').show();destroyViecNgayPinto();$('.viecngay-jobs').html("");},success:function(response){if(response.status=='success'){$('.viecngay-loader').hide();$('.viecngay-jobs').height(0).html(response.html);viecNgayJobContainer.imagesLoaded(function(){initViecNgayPinto();});}},error:function(error){}});}
function countSuggestJob(){$.ajax({url:SUGGEST_JOB_COUNT_URL,type:'GET',dataType:'json',}).done(function(response){if(response.status=='success'){if(parseInt(response.total)>0){$('#count-suggest-job').html(response.total);$('#has-suggest-job').show();}else{$('#has-no-suggest-job').show();}}}).fail(function(){console.log("error");}).always(function(){console.log("complete");});}
function showPrivacySetting()
{if($.cookie("show-setting-privacy-cv")!=1){$('#save-done .privacy').click(function(){$(this).fadeOut(5000);});$('#save-done .privacy').show();$.cookie("show-setting-privacy-cv",1,{expires:180});}}
var btnSaveCv=$('#btn-save-cv');function ajaxSaveForm(){var ajaxSaveOptions={beforeSend:function(){CVOFormController.setSaving(true);btnSaveCv.find('.title').text('Đang lưu');},success:function(response){if(response.status=='success'){if(!builder.cv_id){ta("create_cv_success_1.0",{t_i:template_cv_id,})
trackingTimeCreateCvSuccess()}
builder.cv_id=response.cv_id;$("#cvbuilder-container").hide();$("#cvo-toolbar").hide();$('#save-done').show();if(window.is_confirm_enable_on_job){$('#modal-on-job').modal('show');}
$('#save-done .cv-online').html(response.origin_url);$('.share-fb').attr('href',"http://www.facebook.com/sharer/sharer.php?u="+response.origin_url);$('.share-twitter').attr('href',"https://twitter.com/intent/tweet?url="+response.origin_url);$('.share-linkedin').attr('href',"https://www.linkedin.com/cws/share?url="+response.origin_url);$('#btn-view-cv').attr('href',response.origin_url);$('#save-done .btn-download-cv').data('id',response.encrypted_cv_id);$('#cvo-toolbar-lang').remove();$('#cvoForm').find('input[name=cv_id]').val(builder.cv_id);$('#cvoForm').attr('action',URL_EDIT);history.pushState(null,null,response.edit_url);suggestJobsTopCV();suggestJobsViecNgay();countSuggestJob();}else{alert(response.error);}
btnSaveCv.find('.title').text('Lưu CV');CVOFormController.setSaving(false);},error:function(error){CVOFormController.setSaving(false);alert('Lưu CV thất bại!');}}
CVOFormController.ajaxSaveForm(ajaxSaveOptions);}
function trackingTimeCreateCvSuccess(){const start=localStorage.getItem("startTime");const end=new Date().getTime();if(start){const diff=end-start;const seconds=Math.floor((diff/1000)%60);window.ta("time_create_cv_success_1.0",{t_s:seconds,t_i:template_cv_id,});}}
function saveCv()
{$(document).scrollTop(0);ajaxSaveForm();}
function updateCvTitleAndSave()
{var cvTitle=$('#inp-cv-title').val().trim();if(!cvTitle.length){$('#error-cv-title-empty').show();return false;}else{$('#error-cv-title-empty').hide();}
$('#cv-title').html(cvTitle).trigger('input');$('#modal-update-cv-title').modal('hide');saveCv();}
function showUpdateTitlePopup()
{$('#inp-cv-title').val('');$('#modal-update-cv-title').modal('show');$('#inp-cv-title').focus();}
$(document).ready(function(){btnSaveCv.click(function(e){ta("button_save_cv_1.0");e.preventDefault();var cvTitle=$('#cv-title').html();if(!cvTitle.length||cvTitle=='Untitled CV'){showUpdateTitlePopup();}else{saveCv();}});$('#inp-cv-title').keypress(function(e){if(e.which==13){updateCvTitleAndSave();return false;}});$('.ads-close').click(function(){$('.ads-viet-cv').hide();$('#cv-suggestion-container').css({'height':'600px'});});$('#link-close-modal-change-on-job').on('click',function(){$('#modal-on-job').modal('hide');});});const storageKeySurveyToolCvTime='survey_tool_cv_time';function showFormSurvey(){if(isSurveyToolCV==0){const now=formSurveyFormatDate(new Date());let showAt=localStorage.getItem(storageKeySurveyToolCvTime);if((!showAt||now>showAt)){$('#modal-survey-tool-cv').modal('show');localStorage.setItem(storageKeySurveyToolCvTime,now);sendTrackingPopUpSurveyToolCV();}}}
function formSurveyFormatDate(date){const offset=date.getTimezoneOffset();date=new Date(date.getTime()-(offset*60*1000));return date.toISOString().split('T')[0];}
function trackingLink(type,link){ta(type);window.open(link,'_blank').focus();}