import{_ as i}from"./AppLayout.34fe51ed.js";import o from"./DeleteTeamForm.7702b3e8.js";import{J as r}from"./SectionBorder.5c9cd9a9.js";import l from"./TeamMemberManager.6c14a5d5.js";import n from"./UpdateTeamNameForm.e5f51b7f.js";import{b as a,c,e as s,f as m,m as t,g as p,F as f,v as d}from"./app.753034a2.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./ActionSection.c1f107a4.js";import"./SectionTitle.c4bdf557.js";import"./ConfirmationModal.aae75bf8.js";import"./Modal.f7fc35e7.js";import"./DangerButton.45395099.js";import"./SecondaryButton.759dc827.js";import"./ActionMessage.bab03afa.js";import"./Button.8f97a9ee.js";import"./DialogModal.a578828c.js";import"./FormSection.eb0b96e7.js";import"./Input.facd3d4b.js";import"./InputError.f8e0b9a5.js";import"./Label.c04ef1b0.js";const u=m("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Team Settings ",-1),x={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},E={__name:"Show",props:{team:Object,availableRoles:Array,permissions:Object},setup(e){return(b,g)=>(a(),c(i,{title:"Team Settings"},{header:s(()=>[u]),default:s(()=>[m("div",null,[m("div",x,[t(n,{team:e.team,permissions:e.permissions},null,8,["team","permissions"]),t(l,{class:"mt-10 sm:mt-0",team:e.team,"available-roles":e.availableRoles,"user-permissions":e.permissions},null,8,["team","available-roles","user-permissions"]),e.permissions.canDeleteTeam&&!e.team.personal_team?(a(),p(f,{key:0},[t(r),t(o,{class:"mt-10 sm:mt-0",team:e.team},null,8,["team"])],64)):d("",!0)])])]),_:1}))}};export{E as default};