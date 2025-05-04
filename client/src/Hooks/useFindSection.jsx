import { useNavigate } from "react-router-dom";

export default function useFindSection() {
      const navigate = useNavigate();

      const find = (path) => {
            const [page, hash] = path.split("#");

            navigate(page);

            const element = document.getElementById(hash);
            if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
            }
      };

      return find;
}
