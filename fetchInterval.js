import { fetchToUrl } from "./fetchToUrl.js";

export default function updateInterval() {
  fetchToUrl(
    "http://api.openweathermap.org/data/2.5/forecast?q=Kazan&units=metric&appid=302f3545e76fc5e9d7af285032706f41&lang=ru&units=metric"
  );
  setInterval(
    () =>
      fetchToUrl(
        "http://api.openweathermap.org/data/2.5/forecast?q=Kazan&units=metric&appid=302f3545e76fc5e9d7af285032706f41&lang=ru&units=metric"
      ),
    3600000
  );
}
