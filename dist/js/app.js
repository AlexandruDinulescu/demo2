!function r(u,s,f){function c(e,t){if(!s[e]){if(!u[e]){var o="function"==typeof require&&require;if(!t&&o)return o(e,!0);if(p)return p(e,!0);var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}var i=s[e]={exports:{}};u[e][0].call(i.exports,function(t){var o=u[e][1][t];return c(o||t)},i,i.exports,r,u,s,f)}return s[e].exports}for(var p="function"==typeof require&&require,t=0;t<f.length;t++)c(f[t]);return c}({1:[function(t,o,e){"use strict";var n={superFish:function(){$(".sf-menu").superfish()},menuToggler:function(){$(".icon-span").on("click",function(){$(".sf-menu").stop().slideToggle()})},getPopovers:function(){$('[data-toggle="popover"]').popover()},getTooltips:function(){$('[data-toggle="tooltip"]').tooltip()},setLightbox:function(){$(document).on("click",'[data-toggle="lightbox"]',function(t){t.preventDefault();$(this).ekkoLightbox({})})},init:function(){this.superFish();this.menuToggler();this.getPopovers();this.getPopovers();this.setLightbox()}};$(document).ready(function(){n.init()})},{}]},{},[1]);
//# sourceMappingURL=app.js.map
