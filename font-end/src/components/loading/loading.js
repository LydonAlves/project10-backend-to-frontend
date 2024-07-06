import "./loading.css"

export const loading = () => {
  const loadingDiv = document.createElement("div")
  const loadingImg = document.createElement("img")

  loadingDiv.className = "loadingDiv"
  loadingImg.className = "loadingImg"

  loadingImg.src = "./assets/loading/spinner.svg"

  loadingDiv.append(loadingImg)
  return loadingDiv
}