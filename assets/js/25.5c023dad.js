(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{478:function(t,e,a){"use strict";a.r(e);var s=a(51),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"builders-domain-memory"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#builders-domain-memory"}},[t._v("#")]),t._v(" builders.domain.memory")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#history"}},[t._v("History")])]),a("li",[a("a",{attrs:{href:"#finitehistory"}},[t._v("FiniteHistory")])]),a("li",[a("a",{attrs:{href:"#markovian"}},[t._v("Markovian")])]),a("li",[a("a",{attrs:{href:"#memoryless"}},[t._v("Memoryless")])])])]),a("p"),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("skdecide-summary")],1),t._v(" "),a("h2",{attrs:{id:"history"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#history"}},[t._v("#")]),t._v(" History")]),t._v(" "),a("p",[t._v("A domain must inherit this class if its full state history must be stored to compute its dynamics (non-Markovian\ndomain).")]),t._v(" "),a("h3",{attrs:{id:"get-memory-maxlen"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-memory-maxlen"}},[t._v("#")]),t._v(" _get_memory_maxlen "),a("Badge",{attrs:{text:"History",type:"tip"}})],1),t._v(" "),a("skdecide-signature",{attrs:{name:"_get_memory_maxlen",sig:{params:[{name:"self"}],return:"Optional[int]"}}}),t._v(" "),a("p",[t._v("Get the memory max length (or None if unbounded).")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("This function returns always None by default because the memory length is unbounded at this level.")])]),t._v(" "),a("h4",{attrs:{id:"returns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns"}},[t._v("#")]),t._v(" Returns")]),t._v(" "),a("p",[t._v("The memory max length (or None if unbounded).")]),t._v(" "),a("h3",{attrs:{id:"init-memory"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#init-memory"}},[t._v("#")]),t._v(" _init_memory "),a("Badge",{attrs:{text:"History",type:"tip"}})],1),t._v(" "),a("skdecide-signature",{attrs:{name:"_init_memory",sig:{params:[{name:"self"},{name:"state",default:"None",annotation:"Optional[D.T_state]"}],return:"D.T_memory[D.T_state]"}}}),t._v(" "),a("p",[t._v("Initialize memory (possibly with a state) according to its specification and return it.")]),t._v(" "),a("p",[t._v("This function is automatically called by "),a("code",[t._v("Initializable._reset()")]),t._v(" to reinitialize the internal memory whenever\nthe domain is used as an environment.")]),t._v(" "),a("h4",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("state")]),t._v(": An optional state to initialize the memory with (typically the initial state).")])]),t._v(" "),a("h4",{attrs:{id:"returns-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns-2"}},[t._v("#")]),t._v(" Returns")]),t._v(" "),a("p",[t._v("The new initialized memory.")]),t._v(" "),a("h2",{attrs:{id:"finitehistory"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#finitehistory"}},[t._v("#")]),t._v(" FiniteHistory")]),t._v(" "),a("p",[t._v("A domain must inherit this class if the last N states must be stored to compute its dynamics (Markovian\ndomain of order N).")]),t._v(" "),a("p",[t._v("N is specified by the return value of the "),a("code",[t._v("FiniteHistory._get_memory_maxlen()")]),t._v(" function.")]),t._v(" "),a("h3",{attrs:{id:"get-memory-maxlen-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-memory-maxlen-2"}},[t._v("#")]),t._v(" _get_memory_maxlen "),a("Badge",{attrs:{text:"History",type:"warn"}})],1),t._v(" "),a("skdecide-signature",{attrs:{name:"_get_memory_maxlen",sig:{params:[{name:"self"}],return:"int"}}}),t._v(" "),a("p",[t._v("Get the (cached) memory max length.")]),t._v(" "),a("p",[t._v("By default, "),a("code",[t._v("FiniteHistory._get_memory_maxlen()")]),t._v(" internally calls "),a("code",[t._v("FiniteHistory._get_memory_maxlen_()")]),t._v(" the first\ntime and automatically caches its value to make future calls more efficient (since the memory max length is\nassumed to be constant).")]),t._v(" "),a("h4",{attrs:{id:"returns-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns-3"}},[t._v("#")]),t._v(" Returns")]),t._v(" "),a("p",[t._v("The memory max length.")]),t._v(" "),a("h3",{attrs:{id:"get-memory-maxlen-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-memory-maxlen-3"}},[t._v("#")]),t._v(" _get_memory_maxlen_ "),a("Badge",{attrs:{text:"FiniteHistory",type:"tip"}})],1),t._v(" "),a("skdecide-signature",{attrs:{name:"_get_memory_maxlen_",sig:{params:[{name:"self"}],return:"int"}}}),t._v(" "),a("p",[t._v("Get the memory max length.")]),t._v(" "),a("p",[t._v("This is a helper function called by default from "),a("code",[t._v("FiniteHistory._get_memory_maxlen()")]),t._v(", the difference being that\nthe result is not cached here.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("The underscore at the end of this function's name is a convention to remind that its result should be\nconstant.")])]),t._v(" "),a("h4",{attrs:{id:"returns-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns-4"}},[t._v("#")]),t._v(" Returns")]),t._v(" "),a("p",[t._v("The memory max length.")]),t._v(" "),a("h3",{attrs:{id:"init-memory-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#init-memory-2"}},[t._v("#")]),t._v(" _init_memory "),a("Badge",{attrs:{text:"History",type:"warn"}})],1),t._v(" "),a("skdecide-signature",{attrs:{name:"_init_memory",sig:{params:[{name:"self"},{name:"state",default:"None",annotation:"Optional[D.T_state]"}],return:"D.T_memory[D.T_state]"}}}),t._v(" "),a("p",[t._v("Initialize memory (possibly with a state) according to its specification and return it.")]),t._v(" "),a("p",[t._v("This function is automatically called by "),a("code",[t._v("Initializable._reset()")]),t._v(" to reinitialize the internal memory whenever\nthe domain is used as an environment.")]),t._v(" "),a("h4",{attrs:{id:"parameters-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters-2"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("state")]),t._v(": An optional state to initialize the memory with (typically the initial state).")])]),t._v(" "),a("h4",{attrs:{id:"returns-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns-5"}},[t._v("#")]),t._v(" Returns")]),t._v(" "),a("p",[t._v("The new initialized memory.")]),t._v(" "),a("h2",{attrs:{id:"markovian"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#markovian"}},[t._v("#")]),t._v(" Markovian")]),t._v(" "),a("p",[t._v("A domain must inherit this class if only its last state must be stored to compute its dynamics (pure Markovian\ndomain).")]),t._v(" "),a("h3",{attrs:{id:"get-memory-maxlen-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-memory-maxlen-4"}},[t._v("#")]),t._v(" _get_memory_maxlen "),a("Badge",{attrs:{text:"History",type:"warn"}})],1),t._v(" "),a("skdecide-signature",{attrs:{name:"_get_memory_maxlen",sig:{params:[{name:"self"}],return:"int"}}}),t._v(" "),a("p",[t._v("Get the (cached) memory max length.")]),t._v(" "),a("p",[t._v("By default, "),a("code",[t._v("FiniteHistory._get_memory_maxlen()")]),t._v(" internally calls "),a("code",[t._v("FiniteHistory._get_memory_maxlen_()")]),t._v(" the first\ntime and automatically caches its value to make future calls more efficient (since the memory max length is\nassumed to be constant).")]),t._v(" "),a("h4",{attrs:{id:"returns-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns-6"}},[t._v("#")]),t._v(" Returns")]),t._v(" "),a("p",[t._v("The memory max length.")]),t._v(" "),a("h3",{attrs:{id:"get-memory-maxlen-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-memory-maxlen-5"}},[t._v("#")]),t._v(" _get_memory_maxlen_ "),a("Badge",{attrs:{text:"FiniteHistory",type:"warn"}})],1),t._v(" "),a("skdecide-signature",{attrs:{name:"_get_memory_maxlen_",sig:{params:[{name:"self"}],return:"int"}}}),t._v(" "),a("p",[t._v("Get the memory max length.")]),t._v(" "),a("p",[t._v("This is a helper function called by default from "),a("code",[t._v("FiniteHistory._get_memory_maxlen()")]),t._v(", the difference being that\nthe result is not cached here.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("The underscore at the end of this function's name is a convention to remind that its result should be\nconstant.")])]),t._v(" "),a("h4",{attrs:{id:"returns-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns-7"}},[t._v("#")]),t._v(" Returns")]),t._v(" "),a("p",[t._v("The memory max length.")]),t._v(" "),a("h3",{attrs:{id:"init-memory-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#init-memory-3"}},[t._v("#")]),t._v(" _init_memory "),a("Badge",{attrs:{text:"History",type:"warn"}})],1),t._v(" "),a("skdecide-signature",{attrs:{name:"_init_memory",sig:{params:[{name:"self"},{name:"state",default:"None",annotation:"Optional[D.T_state]"}],return:"D.T_memory[D.T_state]"}}}),t._v(" "),a("p",[t._v("Initialize memory (possibly with a state) according to its specification and return it.")]),t._v(" "),a("p",[t._v("This function is automatically called by "),a("code",[t._v("Initializable._reset()")]),t._v(" to reinitialize the internal memory whenever\nthe domain is used as an environment.")]),t._v(" "),a("h4",{attrs:{id:"parameters-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters-3"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("state")]),t._v(": An optional state to initialize the memory with (typically the initial state).")])]),t._v(" "),a("h4",{attrs:{id:"returns-8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns-8"}},[t._v("#")]),t._v(" Returns")]),t._v(" "),a("p",[t._v("The new initialized memory.")]),t._v(" "),a("h2",{attrs:{id:"memoryless"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#memoryless"}},[t._v("#")]),t._v(" Memoryless")]),t._v(" "),a("p",[t._v("A domain must inherit this class if it does not require any previous state(s) to be stored to compute its\ndynamics.")]),t._v(" "),a("p",[t._v("A dice roll simulator is an example of memoryless domain (next states are independent of previous ones).")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Whenever an existing domain (environment, simulator...) needs to be wrapped instead of implemented fully in\nscikit-decide (e.g. compiled ATARI games), Memoryless can be used because the domain memory (if any) would\nbe handled externally.")])]),t._v(" "),a("h3",{attrs:{id:"get-memory-maxlen-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-memory-maxlen-6"}},[t._v("#")]),t._v(" _get_memory_maxlen "),a("Badge",{attrs:{text:"History",type:"warn"}})],1),t._v(" "),a("skdecide-signature",{attrs:{name:"_get_memory_maxlen",sig:{params:[{name:"self"}],return:"int"}}}),t._v(" "),a("p",[t._v("Get the (cached) memory max length.")]),t._v(" "),a("p",[t._v("By default, "),a("code",[t._v("FiniteHistory._get_memory_maxlen()")]),t._v(" internally calls "),a("code",[t._v("FiniteHistory._get_memory_maxlen_()")]),t._v(" the first\ntime and automatically caches its value to make future calls more efficient (since the memory max length is\nassumed to be constant).")]),t._v(" "),a("h4",{attrs:{id:"returns-9"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns-9"}},[t._v("#")]),t._v(" Returns")]),t._v(" "),a("p",[t._v("The memory max length.")]),t._v(" "),a("h3",{attrs:{id:"get-memory-maxlen-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-memory-maxlen-7"}},[t._v("#")]),t._v(" _get_memory_maxlen_ "),a("Badge",{attrs:{text:"FiniteHistory",type:"warn"}})],1),t._v(" "),a("skdecide-signature",{attrs:{name:"_get_memory_maxlen_",sig:{params:[{name:"self"}],return:"int"}}}),t._v(" "),a("p",[t._v("Get the memory max length.")]),t._v(" "),a("p",[t._v("This is a helper function called by default from "),a("code",[t._v("FiniteHistory._get_memory_maxlen()")]),t._v(", the difference being that\nthe result is not cached here.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("The underscore at the end of this function's name is a convention to remind that its result should be\nconstant.")])]),t._v(" "),a("h4",{attrs:{id:"returns-10"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns-10"}},[t._v("#")]),t._v(" Returns")]),t._v(" "),a("p",[t._v("The memory max length.")]),t._v(" "),a("h3",{attrs:{id:"init-memory-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#init-memory-4"}},[t._v("#")]),t._v(" _init_memory "),a("Badge",{attrs:{text:"History",type:"warn"}})],1),t._v(" "),a("skdecide-signature",{attrs:{name:"_init_memory",sig:{params:[{name:"self"},{name:"state",default:"None",annotation:"Optional[D.T_state]"}],return:"D.T_memory[D.T_state]"}}}),t._v(" "),a("p",[t._v("Initialize memory (possibly with a state) according to its specification and return it.")]),t._v(" "),a("p",[t._v("This function is automatically called by "),a("code",[t._v("Initializable._reset()")]),t._v(" to reinitialize the internal memory whenever\nthe domain is used as an environment.")]),t._v(" "),a("h4",{attrs:{id:"parameters-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters-4"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("state")]),t._v(": An optional state to initialize the memory with (typically the initial state).")])]),t._v(" "),a("h4",{attrs:{id:"returns-11"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns-11"}},[t._v("#")]),t._v(" Returns")]),t._v(" "),a("p",[t._v("The new initialized memory.")])],1)}),[],!1,null,null,null);e.default=r.exports}}]);