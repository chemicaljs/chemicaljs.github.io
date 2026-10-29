import{F as e,L as t,S as n,b as r,u as i}from"../chunks/B7HogDOQ.js";var a=n(`<h1>Autocomplete</h1> <p>Get search suggestions through the current transport.</p> <!> <h2>Parsing Data</h2> <p>Results are return in json format with <code>plain</code> and <code>rich</code> results from Google</p> <!>`,1);function o(n){var o=a(),s=t(e(o),4);i(s,()=>`<pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#E1E4E8">&#x3C;</span><span style="color:#85E89D">script</span><span style="color:#E1E4E8">></span></span>
<span class="line"><span style="color:#F97583">  import</span><span style="color:#E1E4E8"> Chemical </span><span style="color:#F97583">from</span><span style="color:#9ECBFF"> "chemicaljs/Chemical"</span><span style="color:#E1E4E8">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583">  let</span><span style="color:#E1E4E8"> chemical </span><span style="color:#F97583">=</span><span style="color:#E1E4E8"> $</span><span style="color:#B392F0">state</span><span style="color:#E1E4E8">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583">  async</span><span style="color:#F97583"> function</span><span style="color:#B392F0"> getSuggestions</span><span style="color:#E1E4E8">() &#123;</span></span>
<span class="line"><span style="color:#F97583">    await</span><span style="color:#E1E4E8"> chemical.</span><span style="color:#B392F0">autocomplete</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">"math"</span><span style="color:#E1E4E8">))</span></span>
<span class="line"><span style="color:#E1E4E8">  &#125;</span></span>
<span class="line"><span style="color:#E1E4E8">&#x3C;/</span><span style="color:#85E89D">script</span><span style="color:#E1E4E8">></span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8">&#x3C;</span><span style="color:#79B8FF">Chemical</span></span>
<span class="line"><span style="color:#F97583">  bind</span><span style="color:#E1E4E8">:</span><span style="color:#79B8FF">this</span><span style="color:#E1E4E8">=&#123;chemical&#125;</span></span>
<span class="line"><span style="color:#E1E4E8">/></span></span></code></pre>`);var c=t(s,6);i(c,()=>`<pre class="shiki github-dark" style="background-color:#24292e;color:#e1e4e8" tabindex="0"><code><span class="line"><span style="color:#E1E4E8">[</span></span>
<span class="line"><span style="color:#E1E4E8">    &#123;</span></span>
<span class="line"><span style="color:#9ECBFF">        "type"</span><span style="color:#E1E4E8">: </span><span style="color:#9ECBFF">"math"</span><span style="color:#E1E4E8">,</span></span>
<span class="line"><span style="color:#9ECBFF">        "data"</span><span style="color:#E1E4E8">: &#123;</span></span>
<span class="line"><span style="color:#E1E4E8">            equation: </span><span style="color:#9ECBFF">"1+1"</span><span style="color:#E1E4E8">,</span></span>
<span class="line"><span style="color:#E1E4E8">            result: </span><span style="color:#9ECBFF">"2"</span><span style="color:#E1E4E8">,</span></span>
<span class="line"><span style="color:#E1E4E8">        &#125;</span></span>
<span class="line"><span style="color:#E1E4E8">    &#125;,</span></span>
<span class="line"><span style="color:#E1E4E8">    &#123;</span></span>
<span class="line"><span style="color:#9ECBFF">        "type"</span><span style="color:#E1E4E8">: </span><span style="color:#9ECBFF">"plain"</span><span style="color:#E1E4E8">,</span></span>
<span class="line"><span style="color:#9ECBFF">        "data"</span><span style="color:#E1E4E8">: [</span></span>
<span class="line"><span style="color:#E1E4E8">            &#123;</span></span>
<span class="line"><span style="color:#9ECBFF">                "text"</span><span style="color:#E1E4E8">: </span><span style="color:#9ECBFF">"g"</span><span style="color:#E1E4E8">,</span></span>
<span class="line"><span style="color:#9ECBFF">                "highlight"</span><span style="color:#E1E4E8">: </span><span style="color:#79B8FF">false</span></span>
<span class="line"><span style="color:#E1E4E8">            &#125;,</span></span>
<span class="line"><span style="color:#E1E4E8">            &#123;</span></span>
<span class="line"><span style="color:#9ECBFF">                "text"</span><span style="color:#E1E4E8">: </span><span style="color:#9ECBFF">"mail"</span><span style="color:#E1E4E8">,</span></span>
<span class="line"><span style="color:#9ECBFF">                "highlight"</span><span style="color:#E1E4E8">: </span><span style="color:#79B8FF">true</span></span>
<span class="line"><span style="color:#E1E4E8">            &#125;</span></span>
<span class="line"><span style="color:#E1E4E8">        ],</span></span>
<span class="line"><span style="color:#9ECBFF">        "fullURL"</span><span style="color:#E1E4E8">: </span><span style="color:#9ECBFF">"gmail"</span></span>
<span class="line"><span style="color:#E1E4E8">    &#125;,</span></span>
<span class="line"><span style="color:#E1E4E8">    &#123;</span></span>
<span class="line"><span style="color:#9ECBFF">        "type"</span><span style="color:#E1E4E8">: </span><span style="color:#9ECBFF">"rich"</span><span style="color:#E1E4E8">,</span></span>
<span class="line"><span style="color:#9ECBFF">        "data"</span><span style="color:#E1E4E8">: &#123;</span></span>
<span class="line"><span style="color:#9ECBFF">            "title"</span><span style="color:#E1E4E8">: </span><span style="color:#9ECBFF">"Google"</span><span style="color:#E1E4E8">,</span></span>
<span class="line"><span style="color:#9ECBFF">            "description: "</span><span style="color:#E1E4E8">Search the world</span><span style="color:#9ECBFF">'s information, including webpages, images, videos and more. Google has many special features to help you find exactly what you'</span><span style="color:#E1E4E8">re looking for.</span><span style="color:#9ECBFF">", //Optiona</span><span style="color:#FDAEB7;font-style:italic">l</span></span>
<span class="line"><span style="color:#9ECBFF">            "image"</span><span style="color:#E1E4E8">: </span><span style="color:#9ECBFF">"data:image/png;base64"</span><span style="color:#6A737D"> //Optional</span></span>
<span class="line"><span style="color:#E1E4E8">        &#125;</span></span>
<span class="line"><span style="color:#E1E4E8">    &#125;,</span></span>
<span class="line"><span style="color:#E1E4E8">]</span></span></code></pre>`),r(n,o)}export{o as component};