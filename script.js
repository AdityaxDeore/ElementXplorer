document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.element');
  const infoBox = document.createElement('div');
  infoBox.style.position = 'absolute';
  infoBox.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'; // 80% transparency
  infoBox.style.color = '#000';
  infoBox.style.padding = '10px';
  infoBox.style.border = '1px solid #000';
  infoBox.style.display = 'none';
  infoBox.style.zIndex = '1000'; // Ensure the info box is on top
  document.body.appendChild(infoBox);

  elements.forEach(element => {
    element.addEventListener('click', (event) => {
      const elementInfo = getElementInfo(event.target.innerText);
      infoBox.innerHTML = elementInfo;
      infoBox.style.left = `${event.pageX + 10}px`;
      infoBox.style.top = `${event.pageY + 10}px`;
      infoBox.style.display = 'block';
    });

    element.addEventListener('mouseover', () => {
      element.style.zIndex = '999'; // Ensure the element is on top when hovered
    });

    element.addEventListener('mouseout', () => {
      element.style.zIndex = '1'; // Reset the z-index when not hovered
    });
  });

  document.addEventListener('click', (event) => {
    if (!event.target.classList.contains('element')) {
      infoBox.style.display = 'none';
    }
  });

  function getElementInfo(elementText) {
    const elementsData = {
      '1\nH': 'Hydrogen<br>Atomic Number: 1<br>Symbol: H<br>Atomic Mass: 1.008',
      '2\nHe': 'Helium<br>Atomic Number: 2<br>Symbol: He<br>Atomic Mass: 4.0026',
      '3\nLi': 'Lithium<br>Atomic Number: 3<br>Symbol: Li<br>Atomic Mass: 6.94',
      '4\nBe': 'Beryllium<br>Atomic Number: 4<br>Symbol: Be<br>Atomic Mass: 9.0122',
      '5\nB': 'Boron<br>Atomic Number: 5<br>Symbol: B<br>Atomic Mass: 10.81',
      '6\nC': 'Carbon<br>Atomic Number: 6<br>Symbol: C<br>Atomic Mass: 12.011',
      '7\nN': 'Nitrogen<br>Atomic Number: 7<br>Symbol: N<br>Atomic Mass: 14.007',
      '8\nO': 'Oxygen<br>Atomic Number: 8<br>Symbol: O<br>Atomic Mass: 15.999',
      '9\nF': 'Fluorine<br>Atomic Number: 9<br>Symbol: F<br>Atomic Mass: 18.998',
      '10\nNe': 'Neon<br>Atomic Number: 10<br>Symbol: Ne<br>Atomic Mass: 20.180',
      '11\nNa': 'Sodium<br>Atomic Number: 11<br>Symbol: Na<br>Atomic Mass: 22.990',
      '12\nMg': 'Magnesium<br>Atomic Number: 12<br>Symbol: Mg<br>Atomic Mass: 24.305',
      '13\nAl': 'Aluminum<br>Atomic Number: 13<br>Symbol: Al<br>Atomic Mass: 26.982',
      '14\nSi': 'Silicon<br>Atomic Number: 14<br>Symbol: Si<br>Atomic Mass: 28.085',
      '15\nP': 'Phosphorus<br>Atomic Number: 15<br>Symbol: P<br>Atomic Mass: 30.974',
      '16\nS': 'Sulfur<br>Atomic Number: 16<br>Symbol: S<br>Atomic Mass: 32.06',
      '17\nCl': 'Chlorine<br>Atomic Number: 17<br>Symbol: Cl<br>Atomic Mass: 35.45',
      '18\nAr': 'Argon<br>Atomic Number: 18<br>Symbol: Ar<br>Atomic Mass: 39.948',
      '19\nK': 'Potassium<br>Atomic Number: 19<br>Symbol: K<br>Atomic Mass: 39.098',
      '20\nCa': 'Calcium<br>Atomic Number: 20<br>Symbol: Ca<br>Atomic Mass: 40.078',
      '21\nSc': 'Scandium<br>Atomic Number: 21<br>Symbol: Sc<br>Atomic Mass: 44.956',
      '22\nTi': 'Titanium<br>Atomic Number: 22<br>Symbol: Ti<br>Atomic Mass: 47.867',
      '23\nV': 'Vanadium<br>Atomic Number: 23<br>Symbol: V<br>Atomic Mass: 50.942',
      '24\nCr': 'Chromium<br>Atomic Number: 24<br>Symbol: Cr<br>Atomic Mass: 51.996',
      '25\nMn': 'Manganese<br>Atomic Number: 25<br>Symbol: Mn<br>Atomic Mass: 54.938',
      '26\nFe': 'Iron<br>Atomic Number: 26<br>Symbol: Fe<br>Atomic Mass: 55.845',
      '27\nCo': 'Cobalt<br>Atomic Number: 27<br>Symbol: Co<br>Atomic Mass: 58.933',
      '28\nNi': 'Nickel<br>Atomic Number: 28<br>Symbol: Ni<br>Atomic Mass: 58.693',
      '29\nCu': 'Copper<br>Atomic Number: 29<br>Symbol: Cu<br>Atomic Mass: 63.546',
      '30\nZn': 'Zinc<br>Atomic Number: 30<br>Symbol: Zn<br>Atomic Mass: 65.38',
      '31\nGa': 'Gallium<br>Atomic Number: 31<br>Symbol: Ga<br>Atomic Mass: 69.723',
      '32\nGe': 'Germanium<br>Atomic Number: 32<br>Symbol: Ge<br>Atomic Mass: 72.63',
      '33\nAs': 'Arsenic<br>Atomic Number: 33<br>Symbol: As<br>Atomic Mass: 74.922',
      '34\nSe': 'Selenium<br>Atomic Number: 34<br>Symbol: Se<br>Atomic Mass: 78.96',
      '35\nBr': 'Bromine<br>Atomic Number: 35<br>Symbol: Br<br>Atomic Mass: 79.904',
      '36\nKr': 'Krypton<br>Atomic Number: 36<br>Symbol: Kr<br>Atomic Mass: 83.798',
      '37\nRb': 'Rubidium<br>Atomic Number: 37<br>Symbol: Rb<br>Atomic Mass: 85.468',
      '38\nSr': 'Strontium<br>Atomic Number: 38<br>Symbol: Sr<br>Atomic Mass: 87.62',
      '39\nY': 'Yttrium<br>Atomic Number: 39<br>Symbol: Y<br>Atomic Mass: 88.906',
      '40\nZr': 'Zirconium<br>Atomic Number: 40<br>Symbol: Zr<br>Atomic Mass: 91.224',
      '41\nNb': 'Niobium<br>Atomic Number: 41<br>Symbol: Nb<br>Atomic Mass: 92.906',
      '42\nMo': 'Molybdenum<br>Atomic Number: 42<br>Symbol: Mo<br>Atomic Mass: 95.95',
      '43\nTc': 'Technetium<br>Atomic Number: 43<br>Symbol: Tc<br>Atomic Mass: 98',
      '44\nRu': 'Ruthenium<br>Atomic Number: 44<br>Symbol: Ru<br>Atomic Mass: 101.07',
      '45\nRh': 'Rhodium<br>Atomic Number: 45<br>Symbol: Rh<br>Atomic Mass: 102.91',
      '46\nPd': 'Palladium<br>Atomic Number: 46<br>Symbol: Pd<br>Atomic Mass: 106.42',
      '47\nAg': 'Silver<br>Atomic Number: 47<br>Symbol: Ag<br>Atomic Mass: 107.87',
      '48\nCd': 'Cadmium<br>Atomic Number: 48<br>Symbol: Cd<br>Atomic Mass: 112.41',
      '49\nIn': 'Indium<br>Atomic Number: 49<br>Symbol: In<br>Atomic Mass: 114.82',
      '50\nSn': 'Tin<br>Atomic Number: 50<br>Symbol: Sn<br>Atomic Mass: 118.71',
      '51\nSb': 'Antimony<br>Atomic Number: 51<br>Symbol: Sb<br>Atomic Mass: 121.76',
      '52\nTe': 'Tellurium<br>Atomic Number: 52<br>Symbol: Te<br>Atomic Mass: 127.60',
      '53\nI': 'Iodine<br>Atomic Number: 53<br>Symbol: I<br>Atomic Mass: 126.90',
      '54\nXe': 'Xenon<br>Atomic Number: 54<br>Symbol: Xe<br>Atomic Mass: 131.29',
      '55\nCs': 'Cesium<br>Atomic Number: 55<br>Symbol: Cs<br>Atomic Mass: 132.91',
      '56\nBa': 'Barium<br>Atomic Number: 56<br>Symbol: Ba<br>Atomic Mass: 137.33',
      '57-71': 'Lanthanides<br>Atomic Numbers: 57-71',
      '72\nHf': 'Hafnium<br>Atomic Number: 72<br>Symbol: Hf<br>Atomic Mass: 178.49',
      '73\nTa': 'Tantalum<br>Atomic Number: 73<br>Symbol: Ta<br>Atomic Mass: 180.95',
      '74\nW': 'Tungsten<br>Atomic Number: 74<br>Symbol: W<br>Atomic Mass: 183.84',
      '75\nRe': 'Rhenium<br>Atomic Number: 75<br>Symbol: Re<br>Atomic Mass: 186.21',
      '76\nOs': 'Osmium<br>Atomic Number: 76<br>Symbol: Os<br>Atomic Mass: 190.23',
      '77\nIr': 'Iridium<br>Atomic Number: 77<br>Symbol: Ir<br>Atomic Mass: 192.22',
      '78\nPt': 'Platinum<br>Atomic Number: 78<br>Symbol: Pt<br>Atomic Mass: 195.08',
      '79\nAu': 'Gold<br>Atomic Number: 79<br>Symbol: Au<br>Atomic Mass: 196.97',
      '80\nHg': 'Mercury<br>Atomic Number: 80<br>Symbol: Hg<br>Atomic Mass: 200.59',
      '81\nTl': 'Thallium<br>Atomic Number: 81<br>Symbol: Tl<br>Atomic Mass: 204.38',
      '82\nPb': 'Lead<br>Atomic Number: 82<br>Symbol: Pb<br>Atomic Mass: 207.2',
      '83\nBi': 'Bismuth<br>Atomic Number: 83<br>Symbol: Bi<br>Atomic Mass: 208.98',
      '84\nPo': 'Polonium<br>Atomic Number: 84<br>Symbol: Po<br>Atomic Mass: 209',
      '85\nAt': 'Astatine<br>Atomic Number: 85<br>Symbol: At<br>Atomic Mass: 210',
      '86\nRn': 'Radon<br>Atomic Number: 86<br>Symbol: Rn<br>Atomic Mass: 222',
      '87\nFr': 'Francium<br>Atomic Number: 87<br>Symbol: Fr<br>Atomic Mass: 223',
      '88\nRa': 'Radium<br>Atomic Number: 88<br>Symbol: Ra<br>Atomic Mass: 226',
      '89-103': 'Actinides<br>Atomic Numbers: 89-103',
      '104\nRf': 'Rutherfordium<br>Atomic Number: 104<br>Symbol: Rf<br>Atomic Mass: 267',
      '105\nDb': 'Dubnium<br>Atomic Number: 105<br>Symbol: Db<br>Atomic Mass: 270',
      '106\nSg': 'Seaborgium<br>Atomic Number: 106<br>Symbol: Sg<br>Atomic Mass: 271',
      '107\nBh': 'Bohrium<br>Atomic Number: 107<br>Symbol: Bh<br>Atomic Mass: 270',
      '108\nHs': 'Hassium<br>Atomic Number: 108<br>Symbol: Hs<br>Atomic Mass: 277',
      '109\nMt': 'Meitnerium<br>Atomic Number: 109<br>Symbol: Mt<br>Atomic Mass: 278',
      '110\nDs': 'Darmstadtium<br>Atomic Number: 110<br>Symbol: Ds<br>Atomic Mass: 281',
      '111\nRg': 'Roentgenium<br>Atomic Number: 111<br>Symbol: Rg<br>Atomic Mass: 282',
      '112\nCn': 'Copernicium<br>Atomic Number: 112<br>Symbol: Cn<br>Atomic Mass: 285',
      '113\nNh': 'Nihonium<br>Atomic Number: 113<br>Symbol: Nh<br>Atomic Mass: 286',
      '114\nFl': 'Flerovium<br>Atomic Number: 114<br>Symbol: Fl<br>Atomic Mass: 289',
      '115\nMc': 'Moscovium<br>Atomic Number: 115<br>Symbol: Mc<br>Atomic Mass: 290',
      '116\nLv': 'Livermorium<br>Atomic Number: 116<br>Symbol: Lv<br>Atomic Mass: 293',
      '117\nTs': 'Tennessine<br>Atomic Number: 117<br>Symbol: Ts<br>Atomic Mass: 294',
      '118\nOg': 'Oganesson<br>Atomic Number: 118<br>Symbol: Og<br>Atomic Mass: 294'
    };

    return elementsData[elementText] || 'No information available';
  }
});
