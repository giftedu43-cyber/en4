const routeSets = {
  food: [
    { name: "센텀–마린시티–광안리", detail: "바다 풍경과 가상 로컬 맛집을 잇는 탐방", meta: "센텀 → 파도식탁 → 광안리", icon: "🍽" },
    { name: "송도 바다식탁 산책", detail: "해안 산책 뒤 동네 식당을 발견하는 길", meta: "송도 → 바다정류장 → 암남공원", icon: "🥢" }
  ],
  view: [
    { name: "마린시티 노을 뷰 루트", detail: "도시와 수영만의 빛을 만나는 해안길", meta: "센텀 → 마린시티 → 광안리", icon: "🌊" },
    { name: "영도 절벽 바다길", detail: "파도와 절벽의 풍경을 따라 걷는 길", meta: "영도 → 흰여울 → 바다전망", icon: "☀" }
  ],
  quiet: [
    { name: "그린레일웨이 + 동백섬 루프", detail: "숲길과 해안길을 함께 걷는 고요한 루프", meta: "그린레일웨이 → 동백섬 → 해운대", icon: "🌿" },
    { name: "북항 물결 산책로", detail: "재생된 항만의 여유로운 풍경", meta: "북항 → 친수공원 → 바다쉼터", icon: "⚓" }
  ],
  photo: [
    { name: "광안대교 빛 포인트 루트", detail: "바다와 도시의 빛을 담는 사진 산책", meta: "민락수변 → 광안리 → 뷰포인트", icon: "📷" },
    { name: "영도 골목과 바다 프레임", detail: "골목 끝에서 만나는 바다 사진 명소", meta: "영도 → 골목전망 → 흰여울", icon: "🖼" }
  ]
};

const tasteNames = { food: "맛집 탐방형", view: "바다 뷰형", quiet: "조용한 산책형", photo: "사진 명소형" };
const tasteDescriptions = { food: "바다를 따라 걷고, 동네의 새로운 맛을 발견하는 여행을 좋아해요.", view: "탁 트인 바다와 도시의 빛이 만드는 풍경을 가장 좋아해요.", quiet: "사람이 비교적 적은 길에서 천천히 바다를 만나는 여행을 좋아해요.", photo: "특별한 풍경을 사진으로 남기며 여행의 순간을 기록하는 것을 좋아해요." };
const explorationReasons = { food: "오늘은 바다 풍경과 함께 새로운 동네의 맛을 발견하는 코스를 제안해요.", view: "오늘은 부산 바다와 도시의 빛이 만나는 풍경을 즐겨 보세요.", quiet: "오늘은 조금 더 천천히, 여유로운 해안길을 걸어 보는 건 어때요?", photo: "오늘은 기억에 남을 바다 풍경을 사진으로 남기기 좋은 코스예요." };
const questions = [
  ["부산에서 가장 기대하는 순간은?", ["바다 근처의 맛있는 한 끼", "탁 트인 바다 풍경"]],
  ["걷다가 쉬고 싶을 때는?", ["조용한 벤치에서 쉬고 싶어요", "예쁜 사진을 남기고 싶어요"]],
  ["오늘의 여행 속도는 어떤가요?", ["골목도 천천히 둘러볼래요", "핵심 장소를 활기차게 갈래요"]],
  ["마음이 끌리는 탐방 지점은?", ["동네 카페나 식당", "해안 뷰포인트"]],
  ["가장 좋아하는 바다 시간대는?", ["한적한 오전", "빛이 예쁜 노을 무렵"]],
  ["친구에게 추천할 여행은?", ["맛있는 가게를 발견하는 여행", "사진으로 남기는 여행"]],
  ["길을 고를 때 중요한 것은?", ["사람이 비교적 적은 길", "바다를 가까이 보는 길"]],
  ["잠깐 들를 장소를 고른다면?", ["로컬 메뉴가 있는 식당", "전망 좋은 쉼터"]],
  ["오늘 남기고 싶은 것은?", ["나만 아는 동네 발견", "근사한 여행 사진"]],
  ["마지막 질문! 오늘의 기분은?", ["느긋하고 편안하게", "새롭고 특별하게"]]
];

const routeStops = {
  "센텀–마린시티–광안리": ["센텀시티", "마린시티 바다전망", "파도식탁 · 가상 로컬 식당", "광안리 해변"],
  "송도 바다식탁 산책": ["송도해수욕장", "송도 해안산책로", "바다정류장 · 가상 로컬 식당", "암남공원"],
  "마린시티 노을 뷰 루트": ["센텀시티", "마린시티 노을전망", "수영만 뷰포인트", "광안대교 야경"],
  "영도 절벽 바다길": ["영도대교", "흰여울 문화마을", "절벽전망 쉼터", "영도 바다전망"],
  "그린레일웨이 + 동백섬 루프": ["그린레일웨이", "동백섬 숲길", "바다쉼표 · 가상 카페", "해운대 해변"],
  "북항 물결 산책로": ["북항 친수공원", "항만 산책길", "물결식당 · 가상 로컬 식당", "바다쉼터"],
  "광안대교 빛 포인트 루트": ["민락수변공원", "광안대교 뷰포인트", "빛사진관 · 가상 카페", "광안리 해변"],
  "영도 골목과 바다 프레임": ["흰여울 문화마을 입구", "흰여울 해안산책로", "프레임카페 · 가상 카페", "흰여울 바다"]
};
const routeMapCoordinates = {
  "센텀–마린시티–광안리": [[35.1685922, 129.1312167], [35.1568517, 129.1414591], [35.1557000, 129.1434000], [35.1508879, 129.1167806]],
  "송도 바다식탁 산책": [[35.0762386, 129.0159987], [35.0749000, 129.0148000], [35.0738000, 129.0156000], [35.0580746, 129.0152920]],
  "마린시티 노을 뷰 루트": [[35.1685922, 129.1312167], [35.1600749, 129.1405084], [35.1568517, 129.1414591], [35.1456901, 129.1283872]],
  "영도 절벽 바다길": [[35.0955739, 129.0364551], [35.0777551, 129.0452591], [35.0768000, 129.0445000], [35.0759000, 129.0450000]],
  "그린레일웨이 + 동백섬 루프": [[35.1581707, 129.1728278], [35.1540639, 129.1520862], [35.1548000, 129.1540000], [35.1577809, 129.1581318]],
  "북항 물결 산책로": [[35.1144000, 129.0464000], [35.1136000, 129.0490000], [35.1155000, 129.0510000], [35.1165000, 129.0522000]],
  "광안대교 빛 포인트 루트": [[35.1537000, 129.1265000], [35.1456901, 129.1283872], [35.1500000, 129.1225000], [35.1508879, 129.1167806]],
  "영도 골목과 바다 프레임": [[35.0786000, 129.0458000], [35.0777551, 129.0452591], [35.0769000, 129.0447000], [35.0759000, 129.0450000]]
};
const routeGuideLinks = {
  "송도 바다식탁 산책": [
    "https://maps.app.goo.gl/pvzmGnbjK98UZQX89",
    "https://maps.app.goo.gl/aVQPhCApd9DfP1WQ6",
    "https://maps.app.goo.gl/EAcbSNYFMB7NT2FN9",
    "https://maps.app.goo.gl/RFWPGF53vM2muvsFA"
  ]
};
const customSpots = [
  { id: "centum", name: "센텀시티", coordinates: [35.1685922, 129.1312167] },
  { id: "marine", name: "마린시티", coordinates: [35.1568517, 129.1414591] },
  { id: "gwangan", name: "광안리 해변", coordinates: [35.1508879, 129.1167806] },
  { id: "millak", name: "민락수변공원", coordinates: [35.1537000, 129.1265000] },
  { id: "dongbaek", name: "동백섬", coordinates: [35.1540639, 129.1520862] },
  { id: "haeundae", name: "해운대 해변", coordinates: [35.1577809, 129.1581318] },
  { id: "yeongdo", name: "흰여울 문화마을", coordinates: [35.0777551, 129.0452591] },
  { id: "songdo", name: "송도해수욕장", coordinates: [35.0762386, 129.0159987] },
  { id: "amnam", name: "암남공원", coordinates: [35.0580746, 129.0152920] },
  { id: "northport", name: "북항 친수공원", coordinates: [35.1144000, 129.0464000] }
];

const routeList = document.getElementById("routeList");
const modal = document.getElementById("modalBackdrop");
const builderBackdrop = document.getElementById("builderBackdrop");
const profileBackdrop = document.getElementById("profileBackdrop");
const quiz = document.getElementById("quizBackdrop");
let activeTaste = "food";
let currentStep = 0;
let quizIndex = 0;
let aiRouteIndex = 0;
let aiRecommendedRouteName = null;
let activeRoute = null;
let routeMap = null;
let routeLayer = null;
let userLocationMarker = null;
let builderMap = null;
let builderLayer = null;
let selectedCustomSpotIds = [];
let points = Number(localStorage.getItem("seaWallPoints") || 0);
let activityHistory = JSON.parse(localStorage.getItem("seaWallActivities") || "[]");
let scores = { food: 0, view: 0, quiet: 0, photo: 0 };

function dailyRoutes(taste) {
  const all = routeSets[taste];
  const day = Math.floor(Date.now() / 86400000);
  return [all[day % all.length], all[(day + 1) % all.length]];
}

function renderRoutes() {
  const baseRoutes = dailyRoutes(activeTaste);
  const selectedIndex = baseRoutes.findIndex(route => route.name === aiRecommendedRouteName);
  const first = selectedIndex >= 0 ? selectedIndex : aiRouteIndex % baseRoutes.length;
  const todayRoutes = [baseRoutes[first], ...baseRoutes.filter((_, index) => index !== first)];
  routeList.innerHTML = todayRoutes.map((route, index) => `
    <button class="route-card" aria-label="${route.name} 길 안내 보기">
      <span class="route-art">${route.icon}</span>
      <span class="route-info"><span class="route-top"><b>${route.name}</b><span class="route-crowd">${index === 0 ? "AI 예시 추천" : tasteNames[activeTaste]}</span></span><p>${route.detail}</p><span class="route-meta"><span>⌁ ${route.meta}</span></span></span>
      <span class="arrow">→</span>
    </button>`).join("");
  document.querySelectorAll(".route-card").forEach((card, index) => card.addEventListener("click", () => openNavigation(todayRoutes[index])));
  document.getElementById("routeHeading").textContent = `${tasteNames[activeTaste]} 오늘의 추천`;
}

function routeCoordinates(name) { return routeMapCoordinates[name]; }

function ensureRouteMap() {
  if (!window.L) {
    document.getElementById("gpsNote").textContent = "공개 지도 정보를 불러오지 못했어요. 인터넷 연결을 확인해 주세요.";
    return false;
  }
  if (!routeMap) {
    routeMap = L.map("routeMap", { zoomControl: false });
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 19, attribution: "© OpenStreetMap contributors" }).addTo(routeMap);
    L.control.zoom({ position: "bottomright" }).addTo(routeMap);
  }
  return true;
}

function renderRouteMap() {
  if (!ensureRouteMap()) return;
  const coordinates = routeCoordinates(activeRoute.name);
  const stops = routeStops[activeRoute.name];
  if (routeLayer) routeLayer.remove();
  routeLayer = L.layerGroup().addTo(routeMap);
  L.polyline(coordinates, { color: "#087fa2", weight: 5, dashArray: "8 7" }).addTo(routeLayer);
  coordinates.forEach((coordinate, index) => {
    const icon = L.divIcon({ className: "", html: `<span class="route-marker ${index === currentStep ? "active" : ""}">${index + 1}</span>`, iconSize: [28, 28], iconAnchor: [14, 14] });
    L.marker(coordinate, { icon }).bindPopup(`<b>${stops[index]}</b><br><small>프로토타입 예시 탐방 지점</small>`).addTo(routeLayer);
  });
  routeMap.fitBounds(coordinates, { padding: [25, 25] });
  setTimeout(() => routeMap.invalidateSize(), 50);
}

function showMyLocation() {
  const note = document.getElementById("gpsNote");
  if (!navigator.geolocation) { note.textContent = "이 기기에서는 GPS 위치 기능을 사용할 수 없어요."; return; }
  note.textContent = "현재 위치를 확인하는 중이에요…";
  navigator.geolocation.getCurrentPosition(position => {
    if (!ensureRouteMap()) return;
    const { latitude, longitude } = position.coords;
    if (userLocationMarker) userLocationMarker.remove();
    const icon = L.divIcon({ className: "", html: '<span class="user-marker"></span>', iconSize: [18, 18], iconAnchor: [9, 9] });
    userLocationMarker = L.marker([latitude, longitude], { icon }).bindPopup("현재 위치").addTo(routeMap);
    routeMap.setView([latitude, longitude], 15);
    note.textContent = "현재 위치를 지도에 표시했어요. 위치는 저장하지 않습니다.";
  }, () => { note.textContent = "위치 권한이 허용되지 않았어요. 기기 설정에서 위치 권한을 허용하면 사용할 수 있습니다."; }, { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 });
}

function updateNavigation() {
  const stops = routeStops[activeRoute.name];
  document.getElementById("modalTitle").textContent = activeRoute.name;
  document.getElementById("navPlace").textContent = stops[currentStep];
  document.getElementById("navDescription").innerHTML = `${currentStep === 2 ? "가상의 로컬 탐방 지점도 함께 둘러보세요." : "해안길을 따라 탐방 지점으로 이동하세요."} <span class="demo-label inline">예시 안내</span>`;
  document.getElementById("gpsNote").textContent = "위치 권한을 허용하면 현재 위치를 지도에 표시합니다. 위치는 저장하지 않습니다.";
  document.getElementById("completeRoute").textContent = currentStep === stops.length - 1 ? "루트 완주하고 100P 받기" : "다음 지점으로 안내받기";
  renderRouteMap();
}

function openNavigation(route = dailyRoutes(activeTaste)[0]) { activeRoute = route; currentStep = 0; modal.hidden = false; document.body.style.overflow = "hidden"; updateNavigation(); }
function closeModal() { modal.hidden = true; document.body.style.overflow = ""; }
function ensureBuilderMap() {
  if (!window.L) return false;
  if (!builderMap) {
    builderMap = L.map("builderMap", { zoomControl: false });
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 19, attribution: "© OpenStreetMap contributors" }).addTo(builderMap);
    L.control.zoom({ position: "bottomright" }).addTo(builderMap);
  }
  return true;
}
function renderBuilderMap() {
  if (!ensureBuilderMap()) return;
  if (builderLayer) builderLayer.remove();
  builderLayer = L.layerGroup().addTo(builderMap);
  customSpots.forEach(spot => {
    const order = selectedCustomSpotIds.indexOf(spot.id);
    const icon = L.divIcon({ className: "", html: `<span class="builder-marker ${order >= 0 ? "selected" : ""}">${order >= 0 ? order + 1 : "＋"}</span>`, iconSize: [31, 31], iconAnchor: [15, 15] });
    L.marker(spot.coordinates, { icon }).bindTooltip(spot.name, { direction: "top" }).on("click", () => {
      selectedCustomSpotIds = selectedCustomSpotIds.includes(spot.id) ? selectedCustomSpotIds.filter(item => item !== spot.id) : [...selectedCustomSpotIds, spot.id];
      renderBuilderSpots();
    }).addTo(builderLayer);
  });
  const selectedCoordinates = selectedCustomSpotIds.map(id => customSpots.find(spot => spot.id === id).coordinates);
  if (selectedCoordinates.length > 1) L.polyline(selectedCoordinates, { color: "#f16e52", weight: 4, dashArray: "7 6" }).addTo(builderLayer);
  builderMap.setView([35.125, 129.090], 11);
  setTimeout(() => builderMap.invalidateSize(), 50);
}
function renderBuilderSpots() {
  const selectedNames = selectedCustomSpotIds.map(id => customSpots.find(spot => spot.id === id).name);
  document.getElementById("selectedCustomRoute").textContent = selectedNames.length ? `나의 루트: ${selectedNames.join(" → ")}` : "아직 선택한 지점이 없어요.";
  renderBuilderMap();
}
function openBuilder() { selectedCustomSpotIds = []; builderBackdrop.hidden = false; document.body.style.overflow = "hidden"; renderBuilderSpots(); }
function closeBuilder() { builderBackdrop.hidden = true; document.body.style.overflow = ""; }
function saveActivity() { localStorage.setItem("seaWallPoints", String(points)); localStorage.setItem("seaWallActivities", JSON.stringify(activityHistory)); }
function updateProfile() {
  document.getElementById("profilePoints").textContent = `${points}P`;
  document.getElementById("profileRouteCount").textContent = activityHistory.length;
  const list = document.getElementById("activityList");
  list.innerHTML = activityHistory.length ? activityHistory.slice(0, 4).map(activity => `<li>✓ ${activity} 완주 <span class="demo-label inline">+100P 예시</span></li>`).join("") : "<li>아직 완주한 루트가 없어요.</li>";
}
function openProfile() { updateProfile(); profileBackdrop.hidden = false; document.body.style.overflow = "hidden"; }
function closeProfile() { profileBackdrop.hidden = true; document.body.style.overflow = ""; }
function awardRoutePoints(routeName) { points += 100; activityHistory.unshift(routeName); saveActivity(); updateProfile(); showNotice(`${routeName} 완주! +100P를 받았어요. (예시)`); }
function previewCustomRoute() {
  if (selectedCustomSpotIds.length < 2) { showNotice("지점을 두 곳 이상 선택해 주세요."); return; }
  const selectedSpots = selectedCustomSpotIds.map(id => customSpots.find(spot => spot.id === id));
  const customRouteName = "나만의 해안 루트";
  routeStops[customRouteName] = selectedSpots.map(spot => spot.name);
  routeMapCoordinates[customRouteName] = selectedSpots.map(spot => spot.coordinates);
  closeBuilder();
  openNavigation({ name: customRouteName, detail: "직접 선택한 탐방 지점을 잇는 루트", meta: selectedSpots.map(spot => spot.name).join(" → "), icon: "🧭" });
}
function showNotice(message) { const notice = document.createElement("div"); notice.className = "notice"; notice.textContent = message; document.body.append(notice); setTimeout(() => notice.remove(), 2400); }
function goHome() { window.scrollTo({ top: 0, behavior: "smooth" }); }
function showQuiz() { quiz.hidden = false; document.getElementById("quizIntro").hidden = false; document.getElementById("quizQuestions").hidden = true; document.getElementById("quizResult").hidden = true; }
function beginQuiz() { quizIndex = 0; scores = { food: 0, view: 0, quiet: 0, photo: 0 }; document.getElementById("quizIntro").hidden = true; document.getElementById("quizQuestions").hidden = false; document.getElementById("quizResult").hidden = true; renderQuestion(); }
function renderQuestion() { const [title, answers] = questions[quizIndex]; document.getElementById("quizProgress").textContent = `${quizIndex + 1} / ${questions.length}`; document.getElementById("quizQuestion").textContent = title; document.getElementById("quizOptions").innerHTML = answers.map((answer, index) => `<button data-answer="${index}">${answer}</button>`).join(""); document.querySelectorAll("#quizOptions button").forEach(button => button.addEventListener("click", () => chooseAnswer(Number(button.dataset.answer)))); }
function chooseAnswer(answer) { const pairs = [["food", "view"], ["quiet", "photo"], ["quiet", "view"], ["food", "view"], ["quiet", "photo"], ["food", "photo"], ["quiet", "view"], ["food", "view"], ["food", "photo"], ["quiet", "photo"]]; scores[pairs[quizIndex][answer]] += 1; quizIndex += 1; if (quizIndex < questions.length) { renderQuestion(); return; } activeTaste = Object.keys(scores).reduce((best, key) => scores[key] > scores[best] ? key : best, "food"); document.querySelectorAll(".taste-tab").forEach(tab => tab.classList.toggle("active", tab.dataset.taste === activeTaste)); renderRoutes(); document.getElementById("quizQuestions").hidden = true; document.getElementById("resultTaste").textContent = tasteNames[activeTaste]; document.getElementById("resultDescription").textContent = tasteDescriptions[activeTaste]; document.getElementById("quizResult").hidden = false; }

document.getElementById("startButton").addEventListener("click", showQuiz);
document.getElementById("beginQuiz").addEventListener("click", beginQuiz);
document.getElementById("restartQuiz").addEventListener("click", beginQuiz);
document.getElementById("viewResultRoutes").addEventListener("click", () => { quiz.hidden = true; document.getElementById("routes").scrollIntoView({ behavior: "smooth" }); });
["skipQuiz", "stopQuiz"].forEach(id => document.getElementById(id).addEventListener("click", () => { quiz.hidden = true; document.getElementById("routes").scrollIntoView({ behavior: "smooth" }); }));
document.getElementById("homeButton").addEventListener("click", goHome);
document.getElementById("navHome").addEventListener("click", goHome);
document.getElementById("navRoute").addEventListener("click", () => document.getElementById("routes").scrollIntoView({ behavior: "smooth" }));
document.getElementById("navProfile").addEventListener("click", openProfile);
document.getElementById("aiRecommendButton").addEventListener("click", () => {
  const button = document.getElementById("aiRecommendButton");
  const result = document.getElementById("aiResult");
  button.disabled = true;
  button.querySelector("b").textContent = "AI가 오늘의 새로운 취향을 고르는 중…";
  setTimeout(() => {
    const otherTastes = Object.keys(tasteNames).filter(taste => taste !== activeTaste);
    activeTaste = otherTastes[Math.floor(Math.random() * otherTastes.length)];
    aiRouteIndex = Math.floor(Math.random() * dailyRoutes(activeTaste).length);
    aiRecommendedRouteName = null;
    document.querySelectorAll(".taste-tab").forEach(tab => tab.classList.toggle("active", tab.dataset.taste === activeTaste));
    result.textContent = `프로토타입 추천 · 오늘은 ${tasteNames[activeTaste]}! ${explorationReasons[activeTaste]}`;
    result.hidden = false;
    button.disabled = false;
    button.querySelector("b").textContent = "AI에게 새 루트 추천받기";
    renderRoutes();
    showNotice(`${tasteNames[activeTaste]}을 추천했어요!`);
  }, 550);
});
document.getElementById("routeMakerButton").addEventListener("click", openBuilder);
document.getElementById("closeBuilder").addEventListener("click", closeBuilder);
builderBackdrop.addEventListener("click", event => { if (event.target === builderBackdrop) closeBuilder(); });
document.getElementById("previewCustomRoute").addEventListener("click", previewCustomRoute);
document.getElementById("closeProfile").addEventListener("click", closeProfile);
profileBackdrop.addEventListener("click", event => { if (event.target === profileBackdrop) closeProfile(); });
document.getElementById("exchangePoints").addEventListener("click", () => showNotice("지역 상권 혜택 교환은 프로토타입 예시입니다."));
document.getElementById("showMyLocation").addEventListener("click", showMyLocation);
document.getElementById("closeModal").addEventListener("click", closeModal);
modal.addEventListener("click", event => { if (event.target === modal) closeModal(); });
document.getElementById("completeRoute").addEventListener("click", () => {
  const stops = routeStops[activeRoute.name];
  const guideLink = routeGuideLinks[activeRoute.name]?.[currentStep];
  if (guideLink) window.open(guideLink, "_blank", "noopener");
  if (currentStep < stops.length - 1) { currentStep += 1; updateNavigation(); } else { awardRoutePoints(activeRoute.name); closeModal(); }
});
document.querySelectorAll(".taste-tab").forEach(tab => tab.addEventListener("click", () => { activeTaste = tab.dataset.taste; aiRouteIndex = 0; aiRecommendedRouteName = null; document.getElementById("aiResult").hidden = true; document.querySelectorAll(".taste-tab").forEach(item => item.classList.toggle("active", item === tab)); renderRoutes(); }));
document.getElementById("storyButton").addEventListener("click", () => showNotice("AR 도슨트는 다음 단계에서 연결할 기능이에요."));
updateProfile();
renderRoutes();
