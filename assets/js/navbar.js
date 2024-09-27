const headerContent = `
    <div class="navbar">
        <div class="logo">
       <a href="index.html"><img src="/assets/imgs/logo/pareek-new-logo.png" alt="logo"></a> 
    </div>
    <div class="desktop-menu">
        <ul class="menubar">
            <li class="baritems"><a href="index.html">HOME</a></li>
            <li class="baritems"><a href="about.html">ABOUT US</a></li>
            <li class="baritems"><a href="product.html">PRODUCTS <button class="prod_disp"><i class="fa fa-angle-down"></i></button></a>
                <ul class="dropdown">
                    <li><a href="emulsion.html">Water Base Emulsions</a></li>
                                            <li><a href="primers.html">Water Base Primers</a></li>
                                            <li><a href="cement.html">Cement Paint & Gypsum Mix</a></li>
                                            <li><a href="putty.html">Wall Putty</a></li>
                                            <li><a href="solvent.html">Solvent Base Enamel Paint & Primers</a></li>
                                            <li><a href="damp.html">Damp & Waterproofing</a></li>
                                            <li><a href="flooring.html">Flooring & Tiles Solutions</a></li>
                                            <li><a href="industrial.html">Industrial Paints</a></li>
                </ul></li>
            <li class="baritems"><a href="service.html">SERVICES</a></li>
            <li class="baritems"><a href="dealership.html">DEALERSHIP</a></li>
            <li class="baritems"><a href="gallery.html">GALLERY</a></li>
            <li class="baritems"><a href="colour-palette.html">COLOUR PALETTE</a></li>
            <li class="baritems"><a href="contact.html">CONTACT US</a></li>
        </ul>
      </div>

      <button type="button" onclick="openmenu()" id="openn"><i class="flaticon-sort"></i></button>
      <div id="showmenufull"> </div> 
      <div id="showmenu" class="navbar-mobile-wrapper">
        <div class="logo logo_menu">
          <a href="index.html"><img src="/assets/imgs/logo/footer-logo.png" alt="logo"></a> 
       </div>
      
          <ul class="menubar-mobile">
            <li ><a href="index.html">HOME</a></li>
            <li ><a href="about.html">ABOUT US</a></li>
            <li ><a href="product.html">PRODUCTS </a><button class="prod_mob" onclick="opendropdown()"><i class="fa fa-angle-down"></i></button>
                <ul class="dropdown_menu">
                   <li><a href="emulsion.html">Water Base Emulsions</a></li>
                                            <li><a href="primers.html">Water Base Primers</a></li>
                                            <li><a href="cement.html">Cement Paint & Gypsum Mix</a></li>
                                            <li><a href="putty.html">Wall Putty</a></li>
                                            <li><a href="solvent.html">Enamel Paint & Primers</a></li>
                                            <li><a href="damp.html">Damp & Waterproofing</a></li>
                                            <li><a href="flooring.html">Flooring & Tiles Solutions</a></li>
                                            <li><a href="industrial.html">Industrial Paints</a></li>
                </ul></li>
            <li><a href="service.html">SERVICES</a></li>
            <li><a href="dealership.html">DEALERSHIP</a></li>
            <li><a href="gallery.html">GALLERY</a></li>
            <li><a href="colour-palette.html">COLOUR PALETTE</a></li>
            <li><a href="contact.html">CONTACT US</a></li>
            
        </ul>
             
      
        <button id="close" onclick="closemenu()">&times;</button>
        </div>
    </div>

`;

// Insert the footer content into the desired element, e.g., with the ID 'footer'
document.getElementById('navigationbar').innerHTML = headerContent;
