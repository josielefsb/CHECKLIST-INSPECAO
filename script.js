    const commonSections = [
      {
        title: "Documentação e identificação",
        items: [
          ["documents", "Documento do veículo/equipamento e licenças aplicáveis disponíveis e válidos"],
          ["identity-labels", "Placa, número de frota e identificação de segurança legíveis"],
          ["registration", "Identificação do chassi ou número de série confere com o registro"],
          ["operator-authorization", "Operador habilitado e autorizado para este veículo/equipamento"]
        ]
      },
      {
        title: "Estrutura, carroceria e rodagem",
        items: [
          ["structure", "Chassi, carroceria e estrutura sem trincas, deformações ou danos aparentes"],
          ["doors-access", "Portas, travas, degraus, corrimãos e acessos firmes e funcionais"],
          ["glass-mirrors", "Para-brisa, vidros, espelhos e retrovisores limpos, íntegros e ajustados"],
          ["tires", "Pneus sem cortes, bolhas ou desgaste excessivo; calibragem adequada"],
          ["wheels", "Rodas, aros, porcas e parafusos sem danos e com fixação segura"],
          ["leaks-underbody", "Inspeção sob o veículo sem vazamentos ou peças soltas"]
        ]
      },
      {
        title: "Motor, fluidos e transmissão",
        items: [
          ["engine-oil", "Nível do óleo do motor dentro da faixa recomendada"],
          ["coolant", "Nível do líquido de arrefecimento adequado e sem sinais de contaminação"],
          ["brake-fluid", "Fluido de freio dentro da faixa, quando aplicável"],
          ["fuel", "Combustível suficiente para a operação planejada; tampa e linhas sem vazamento"],
          ["belts-hoses", "Mangueiras, correias, conexões e radiador sem danos ou vazamentos"],
          ["battery", "Bateria e terminais firmes, limpos e sem corrosão excessiva"],
          ["transmission", "Transmissão e embreagem sem ruídos, trancos ou vazamento aparente"]
        ]
      },
      {
        title: "Freios, direção e controles",
        items: [
          ["service-brake", "Freio de serviço com acionamento e resposta normais"],
          ["parking-brake", "Freio de estacionamento segura o veículo/equipamento"],
          ["steering", "Direção sem folga excessiva, travamento, ruído ou vibração anormal"],
          ["pedals-controls", "Pedais, alavancas e comandos retornam e funcionam adequadamente"]
        ]
      },
      {
        title: "Sistema elétrico e sinalização",
        items: [
          ["headlights", "Faróis alto e baixo acendem e estão regulados"],
          ["lights", "Lanternas, luzes de freio, ré e setas funcionam"],
          ["beacon-horn", "Buzina, alarme de ré e sinalizador luminoso funcionam, quando existentes"],
          ["dashboard", "Painel, indicadores e instrumentos sem alertas críticos"],
          ["wipers", "Limpadores, lavador do para-brisa e desembaçador funcionam"]
        ]
      },
      {
        title: "Cabine e equipamentos de segurança",
        items: [
          ["seat-belt", "Cinto de segurança íntegro, trava e recolhimento funcionais"],
          ["seat-cabin", "Banco, encosto, cabine e comandos com fixação adequada"],
          ["fire-extinguisher", "Extintor presente, acessível, carregado e dentro da validade, quando exigido"],
          ["emergency-kit", "Triângulo, macaco, chave de roda e estepe disponíveis, quando aplicável"],
          ["safety-guards", "Proteções, tampas e dispositivos de segurança instalados e firmes"]
        ]
      },
      {
        title: "Partida e teste funcional",
        items: [
          ["starting", "Partida normal, sem dificuldade ou ruído anormal"],
          ["idle-exhaust", "Motor em marcha lenta estável e escapamento sem fumaça ou ruído excessivo"],
          ["operational-test", "Teste funcional em local seguro sem vibração, ruído ou comportamento anormal"]
        ]
      }
    ];

    const typeSections = {
      car: [
        {
          title: "Verificações específicas — carro / utilitário",
          items: [
            ["car-spare", "Estepe, macaco e chave de roda presentes e em condições de uso"],
            ["car-seatbelts", "Cintos de todos os assentos disponíveis e travando corretamente"],
            ["car-airbags", "Indicador do airbag apaga após a partida, quando equipado"],
            ["car-exhaust", "Sistema de escapamento fixo e sem vazamento aparente"],
            ["car-climate", "Ventilação, ar-condicionado e desembaçamento operacionais"],
            ["car-doors", "Capô, porta-malas, portas e vidros elétricos abrem e fecham adequadamente"]
          ]
        }
      ],
      truck: [
        {
          title: "Verificações específicas — caminhão / ônibus",
          items: [
            ["truck-air-brake", "Sistema de ar comprimido sem vazamento e com pressão operacional"],
            ["truck-air-warning", "Avisos de baixa pressão e dispositivos de segurança pneumáticos funcionam"],
            ["truck-retarder", "Freio auxiliar, retardador ou freio motor operacional, quando equipado"],
            ["truck-fifth-wheel", "Quinta roda, pino-rei e travas sem dano e com acoplamento seguro"],
            ["truck-connections", "Mangueiras de ar e conexões elétricas do reboque íntegras e fixadas"],
            ["truck-trailer", "Reboque, engate, pés de apoio e sistema de iluminação verificados, quando aplicável"],
            ["truck-load", "Carga distribuída, acondicionada e amarrada sem risco de deslocamento"],
            ["truck-tachograph", "Tacógrafo e demais equipamentos obrigatórios presentes e operacionais"],
            ["truck-tires", "Pneus internos/externos, estepe e para-barros em condições seguras"],
            ["truck-mirrors", "Espelhos adicionais e câmeras de manobra limpos e funcionais"],
            ["truck-exit", "Saídas de emergência e martelos identificados e acessíveis em ônibus"],
            ["truck-coupling-test", "Acoplamento conferido e teste de freio do conjunto realizado em local seguro"]
          ]
        }
      ],
      machine: [
        {
          title: "Verificações específicas — máquina / equipamento",
          items: [
            ["machine-hydraulics", "Nível do fluido hidráulico adequado; bomba, reservatório e filtros sem vazamento"],
            ["machine-hoses", "Mangueiras, cilindros, conexões e linhas hidráulicas sem abrasão ou dano"],
            ["machine-attachment", "Implemento, caçamba ou acessório compatível, travado e com pinos seguros"],
            ["machine-wear", "Dentes, lâmina, bordas cortantes e pontos de desgaste em condição operacional"],
            ["machine-undercarriage", "Esteiras, roletes, rodas-guia e sapatas sem dano ou tensão inadequada"],
            ["machine-outriggers", "Estabilizadores, patolas e travas firmes e operacionais, quando existentes"],
            ["machine-rops", "Estrutura ROPS/FOPS, cabine e proteções sem dano ou alteração"],
            ["machine-emergency-stop", "Parada de emergência e intertravamentos funcionam, quando equipados"],
            ["machine-controls", "Comandos de elevação, giro, deslocamento e implementos respondem corretamente"],
            ["machine-warning", "Alarme de ré, buzina, giroflex e sinalização sonora/visual funcionam"],
            ["machine-steps", "Pontos de apoio, degraus, corrimãos e plataforma sem óleo ou obstrução"],
            ["machine-work-area", "Área de trabalho e limites de operação verificados antes da movimentação"]
          ]
        }
      ]
    };

    const ESSENTIAL_ITEM_IDS = new Set([
      "operator-authorization", "structure", "glass-mirrors", "tires", "wheels",
      "leaks-underbody", "engine-oil", "coolant", "brake-fluid", "fuel", "belts-hoses",
      "service-brake", "parking-brake", "steering", "pedals-controls", "headlights",
      "lights", "dashboard", "seat-belt", "safety-guards", "starting", "idle-exhaust",
      "operational-test", "car-seatbelts", "car-airbags", "car-exhaust",
      "truck-air-brake", "truck-air-warning", "truck-fifth-wheel", "truck-connections",
      "truck-load", "truck-tires", "truck-exit", "truck-coupling-test",
      "machine-hydraulics", "machine-hoses", "machine-attachment", "machine-undercarriage",
      "machine-outriggers", "machine-rops", "machine-emergency-stop", "machine-controls",
      "machine-warning", "machine-steps", "machine-work-area"
    ]);

    const DRAFT_KEY = "frota-checklist-draft-v1";
    const HISTORY_KEY = "frota-checklist-history-v1";
    const VEHICLES_KEY = "frota-checklist-vehicles-v1";
    const OPERATORS_KEY = "frota-checklist-operators-v1";
    const AUTH_KEY = "frota-checklist-password-sha256-v1";
    const INITIAL_PASSWORD = "123456";
    const statusNames = { ok: "Conforme", fail: "Não conforme", na: "N/A" };
    const notice = document.getElementById("notice");
    let draft = readDraft();
    let history = readHistory();
    let vehicles = readVehicles();
    let operators = readOperators();
    let reviewSectionIndex = null;

    function showNotice(message) {
      notice.textContent = message;
      notice.hidden = false;
    }

    function readJson(key, fallback, validate) {
      let raw;
      try {
        raw = localStorage.getItem(key);
      } catch (error) {
        showNotice(`Não foi possível acessar o armazenamento local do navegador: ${error.message}`);
        return fallback;
      }
      if (raw === null) return fallback;
      try {
        const parsed = JSON.parse(raw);
        if (validate(parsed)) return parsed;
        showNotice("Um registro salvo está em formato inválido e não pôde ser carregado.");
        return fallback;
      } catch (error) {
        showNotice(`Um registro salvo não pôde ser lido: ${error.message}`);
        return fallback;
      }
    }

    function readDraft() {
      return readJson(DRAFT_KEY, createDraft(), (value) =>
        value && typeof value === "object" && typeof value.openedAt === "string" &&
        value.vehicle && typeof value.vehicle === "object" && value.answers && typeof value.answers === "object"
      );
    }

    function readHistory() {
      return readJson(HISTORY_KEY, [], Array.isArray);
    }

    function readVehicles() {
      return readJson(VEHICLES_KEY, [], (value) =>
        Array.isArray(value) && value.every((vehicle) =>
          vehicle && typeof vehicle.id === "string" && typeof vehicle.type === "string" &&
          vehicle.details && typeof vehicle.details === "object"
        )
      );
    }

    function readOperators() {
      return readJson(OPERATORS_KEY, [], (value) =>
        Array.isArray(value) && value.every((operator) =>
          operator && typeof operator.id === "string" && typeof operator.name === "string"
        )
      );
    }

    function newId() {
      return typeof crypto.randomUUID === "function"
        ? crypto.randomUUID()
        : `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
    }

    function normalize(value) {
      return value.trim().toLocaleLowerCase("pt-BR");
    }

    function vehicleIdentity(vehicle) {
      for (const field of ["serialNumber", "plate", "fleetNumber"]) {
        const value = vehicle[field]?.trim();
        if (value) return { field, value: normalize(value) };
      }
      return null;
    }

    function findSavedVehicle(vehicle) {
      for (const field of ["serialNumber", "plate", "fleetNumber"]) {
        const value = vehicle[field]?.trim();
        if (!value) continue;
        const match = vehicles.find((saved) =>
          saved.type === vehicle.type &&
          normalize(saved.details[field] || "") === normalize(value)
        );
        if (match) return match;
      }
      return null;
    }

    function renderRegistries() {
      const vehicleSelect = document.getElementById("saved-vehicle");
      const selectedVehicle = vehicleSelect.value;
      vehicleSelect.replaceChildren();
      [
        ["", "Selecione um veículo salvo ou cadastre um novo"],
        ["__new__", "+ Cadastrar novo veículo"]
      ].forEach(([value, label]) => {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = label;
        vehicleSelect.append(option);
      });
      vehicles.forEach((vehicle) => {
        const option = document.createElement("option");
        option.value = vehicle.id;
        const identifiers = [vehicle.details.plate, vehicle.details.fleetNumber, vehicle.details.serialNumber].filter(Boolean);
        option.textContent = `${vehicleName({ ...vehicle.details, type: vehicle.type })}${vehicle.details.makeModel ? ` · ${vehicle.details.makeModel}` : ""}${identifiers.length > 1 ? ` · ${vehicle.details.serialNumber || vehicle.details.fleetNumber}` : ""}`;
        vehicleSelect.append(option);
      });
      vehicleSelect.value = vehicles.some((vehicle) => vehicle.id === selectedVehicle)
        ? selectedVehicle
        : (selectedVehicle === "__new__" ? "__new__" : (findSavedVehicle(draft.vehicle)?.id || (vehicleIdentity(draft.vehicle) ? "__new__" : "")));

      const operatorSelect = document.getElementById("saved-operator");
      const selectedOperator = operatorSelect.value;
      operatorSelect.replaceChildren();
      [
        ["", "Selecione um operador salvo"],
        ["__new__", "+ Cadastrar novo operador"]
      ].forEach(([value, label]) => {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = label;
        operatorSelect.append(option);
      });
      operators
        .slice()
        .sort((first, second) => first.name.localeCompare(second.name, "pt-BR"))
        .forEach((operator) => {
          const option = document.createElement("option");
          option.value = operator.id;
          option.textContent = operator.name;
          operatorSelect.append(option);
        });
      operatorSelect.value = operators.some((operator) => operator.id === selectedOperator)
        ? selectedOperator
        : (selectedOperator === "__new__" ? "__new__" : (operators.find((operator) => normalize(operator.name) === normalize(draft.operator || ""))?.id || (draft.operator ? "__new__" : "")));

      const locked = Boolean(draft.finalizedAt);
      vehicleSelect.disabled = locked;
      operatorSelect.disabled = locked;
      document.getElementById("save-vehicle").disabled = locked;
      document.getElementById("save-operator").disabled = locked;
    }

    function saveRegistry(key, value) {
      try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
      } catch (error) {
        showNotice(`Não foi possível salvar o cadastro no navegador: ${error.message}`);
        return false;
      }
    }

    function createDraft() {
      return {
        id: newId(),
        openedAt: new Date().toISOString(),
        finalizedAt: null,
        operator: "",
        comment: "",
        vehicle: { type: "", plate: "", fleetNumber: "", serialNumber: "", makeModel: "", color: "", reading: "", location: "" },
        answers: {}
      };
    }

    function save(key, value) {
      try {
        localStorage.setItem(key, JSON.stringify(value));
        document.getElementById("save-state").textContent = `Salvo automaticamente às ${new Intl.DateTimeFormat("pt-BR", { hour: "2-digit", minute: "2-digit" }).format(new Date())}`;
        return true;
      } catch (error) {
        showNotice(`Não foi possível salvar no navegador: ${error.message}. Imprima o relatório para não perder as informações.`);
        document.getElementById("save-state").textContent = "Falha ao salvar — imprima uma cópia";
        return false;
      }
    }

    function saveDraft() {
      return save(DRAFT_KEY, draft);
    }

    async function compressPhoto(file) {
      if (!file.type.startsWith("image/")) {
        throw new Error("Escolha um arquivo de imagem.");
      }
      if (file.size > 8 * 1024 * 1024) {
        throw new Error("A foto deve ter no máximo 8 MB antes da compactação.");
      }
      if (typeof createImageBitmap !== "function") {
        throw new Error("Este navegador não oferece suporte ao processamento de fotos.");
      }

      const image = await createImageBitmap(file);
      const scale = Math.min(1, 1000 / Math.max(image.width, image.height));
      const canvas = document.createElement("canvas");
      canvas.width = Math.max(1, Math.round(image.width * scale));
      canvas.height = Math.max(1, Math.round(image.height * scale));
      canvas.getContext("2d").drawImage(image, 0, 0, canvas.width, canvas.height);
      image.close();

      const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/jpeg", 0.68));
      if (!blob) throw new Error("Não foi possível compactar a foto.");
      if (blob.size > 300 * 1024) {
        throw new Error("A foto compactada ainda é grande demais. Escolha uma imagem menor.");
      }
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.addEventListener("load", () => resolve(reader.result));
        reader.addEventListener("error", () => reject(new Error("Não foi possível ler a foto selecionada.")));
        reader.readAsDataURL(blob);
      });
    }

    function sectionsForType(type) {
      if (!type || !typeSections[type]) return [];
      return [...commonSections, ...typeSections[type]];
    }

    function allSections() {
      return sectionsForType(draft.vehicle.type);
    }

    function itemsForType(type) {
      return sectionsForType(type).flatMap((section) => section.items.map(([id, label]) => ({
        id,
        label,
        section: section.title,
        essential: ESSENTIAL_ITEM_IDS.has(id)
      })));
    }

    function allItems() {
      return itemsForType(draft.vehicle.type);
    }

    function itemIsComplete(id) {
      const answer = draft.answers[id];
      return Boolean(answer?.status) && (answer.status !== "fail" || Boolean(answer.note?.trim()));
    }

    function sectionIsComplete(section) {
      return section.items.every(([id]) => itemIsComplete(id));
    }

    function firstIncompleteSection(sections) {
      return sections.findIndex((section) => !sectionIsComplete(section));
    }

    function calculateAptitude() {
      const items = allItems();
      const essentialItems = items.filter(({ essential }) => essential);
      const unconfirmedEssential = essentialItems.filter(({ id }) => draft.answers[id]?.status !== "ok").length;
      const criticalFailures = essentialItems.filter(({ id }) => draft.answers[id]?.status === "fail");
      if (!essentialItems.length) {
        return { status: "pending", missingCount: 0, criticalFailures, remainingCount: 0 };
      }
      if (criticalFailures.length) {
        return { status: "unfit", missingCount: unconfirmedEssential, criticalFailures, remainingCount: items.filter(({ id }) => !draft.answers[id]?.status).length };
      }
      if (unconfirmedEssential) {
        return { status: "pending", missingCount: unconfirmedEssential, criticalFailures, remainingCount: items.filter(({ id }) => !draft.answers[id]?.status).length };
      }
      return {
        status: "fit",
        missingCount: 0,
        criticalFailures,
        remainingCount: items.filter(({ id }) => !draft.answers[id]?.status).length
      };
    }

    function formatDate(value) {
      if (!value) return "—";
      return new Intl.DateTimeFormat("pt-BR", { dateStyle: "short", timeStyle: "short" }).format(new Date(value));
    }

    function vehicleName(vehicle) {
      const typeNames = { car: "Carro / utilitário", truck: "Caminhão / ônibus", machine: "Máquina / equipamento" };
      const identifier = vehicle.plate || vehicle.fleetNumber || vehicle.serialNumber || "Sem identificação";
      return `${typeNames[vehicle.type] || "Veículo"} · ${identifier}`;
    }

    function setInputValues() {
      document.getElementById("vehicle-type").value = draft.vehicle.type || "";
      document.getElementById("operator").value = draft.operator || "";
      document.getElementById("checklist-id").value = draft.id || "—";
      document.getElementById("opened-at").value = formatDate(draft.openedAt);
      document.getElementById("general-comment").value = draft.comment || "";
      document.querySelectorAll("[data-vehicle-field]").forEach((input) => {
        input.value = draft.vehicle[input.dataset.vehicleField] || "";
      });
      const savedOperator = operators.find((operator) => normalize(operator.name) === normalize(draft.operator || ""));
      document.getElementById("saved-operator").value = savedOperator?.id || (draft.operator ? "__new__" : "");
      const savedVehicle = findSavedVehicle(draft.vehicle);
      document.getElementById("saved-vehicle").value = savedVehicle?.id || (vehicleIdentity(draft.vehicle) ? "__new__" : "");
      const readingLabel = document.getElementById("reading-label");
      readingLabel.textContent = draft.vehicle.type === "machine" ? "Horímetro" : "Quilometragem / horímetro";
      document.getElementById("reading").placeholder = draft.vehicle.type === "machine" ? "Horas de operação" : "Leitura atual";
    }

    function renderChecklist() {
      const content = document.getElementById("checklist-content");
      const empty = document.getElementById("empty-checklist");
      const container = document.getElementById("inspection-groups");
      const sections = allSections();
      const locked = Boolean(draft.finalizedAt);
      const incompleteIndex = firstIncompleteSection(sections);
      const activeIndex = reviewSectionIndex !== null && reviewSectionIndex < sections.length
        ? reviewSectionIndex
        : (incompleteIndex === -1 ? null : incompleteIndex);
      if (activeIndex === null) reviewSectionIndex = null;

      content.hidden = !sections.length;
      empty.hidden = Boolean(sections.length);
      document.getElementById("locked-note").hidden = !locked;
      document.getElementById("step-progress").hidden = !sections.length || activeIndex === null;
      document.getElementById("continue-checklist").hidden = reviewSectionIndex === null;
      document.getElementById("all-steps-done").hidden = !sections.length || incompleteIndex !== -1 || reviewSectionIndex !== null;
      document.getElementById("general-comment").closest(".general-comment").hidden = !sections.length || incompleteIndex !== -1;
      if (!sections.length) {
        container.replaceChildren();
        updateSummary();
        return;
      }

      container.replaceChildren();
      if (activeIndex !== null) {
        document.getElementById("step-progress-title").textContent = reviewSectionIndex !== null
          ? `Revisando etapa ${activeIndex + 1} de ${sections.length}`
          : `Etapa ${activeIndex + 1} de ${sections.length}`;
        document.getElementById("step-progress-hint").textContent = reviewSectionIndex !== null
          ? "Você está revisando uma etapa já concluída. Volte ao checklist para continuar."
        : "Responda cada item e descreva as falhas para liberar a próxima etapa.";
      }

      sections.forEach((section, index) => {
        const answeredCount = section.items.filter(([id]) => itemIsComplete(id)).length;
        const sectionComplete = sectionIsComplete(section);
        if (!sectionComplete && index > activeIndex) return;

        const group = document.createElement("section");
        const showItems = !sectionComplete || index === activeIndex;
        group.className = `group${showItems ? " is-current" : " is-completed"}`;
        const title = document.createElement("div");
        title.className = "group-title";
        const titleCopy = document.createElement("div");
        titleCopy.className = "group-title-copy";
        const stepLabel = document.createElement("span");
        stepLabel.className = "group-step";
        stepLabel.textContent = `Etapa ${index + 1} de ${sections.length}${sectionComplete ? " · Concluída" : ""}`;
        const heading = document.createElement("span");
        heading.textContent = section.title;
        titleCopy.append(stepLabel, heading);
        const count = document.createElement("span");
        count.className = "group-count";
        count.textContent = `${answeredCount}/${section.items.length} respondidos`;
        const titleActions = document.createElement("div");
        titleActions.className = "group-title-actions";
        titleActions.append(count);
        if (sectionComplete && index !== activeIndex) {
          const reviewButton = document.createElement("button");
          reviewButton.type = "button";
          reviewButton.className = "review-step";
          reviewButton.textContent = "Revisar etapa";
          reviewButton.addEventListener("click", () => {
            reviewSectionIndex = index;
            renderChecklist();
            document.getElementById("inspection-heading").scrollIntoView({ behavior: "smooth", block: "start" });
          });
          titleActions.append(reviewButton);
        }
        title.append(titleCopy, titleActions);
        group.append(title);

        if (!showItems) {
          container.append(group);
          return;
        }

        section.items.forEach(([id, label]) => {
          const answer = draft.answers[id] || {};
          const essential = ESSENTIAL_ITEM_IDS.has(id);
          const row = document.createElement("div");
          row.className = `inspection-item${answer.status === "fail" ? " has-failure" : ""}${answer.status === "fail" && essential ? " has-critical-failure" : ""}`;
          row.dataset.itemId = id;
          const copy = document.createElement("div");
          copy.className = "item-copy";
          const name = document.createElement("span");
          name.className = "item-name";
          name.textContent = label;
          copy.append(name);
          if (essential) {
            const criticalLabel = document.createElement("span");
            criticalLabel.className = "critical-label";
            criticalLabel.textContent = "Requisito essencial para operação";
            copy.append(criticalLabel);
          }
          if (answer.status === "fail" && !answer.note?.trim()) {
            const hint = document.createElement("span");
            hint.className = "item-note-hint";
            hint.textContent = "Descreva a não conformidade";
            copy.append(hint);
          }

          const options = document.createElement("div");
          options.className = "status-options";
          options.setAttribute("role", "group");
          options.setAttribute("aria-label", `Situação: ${label}`);
          [["ok", "✓ Conforme"], ["fail", "! Não conforme"], ["na", "— N/A"]].forEach(([value, text]) => {
            const button = document.createElement("button");
            button.type = "button";
            button.className = "status-button";
            button.dataset.status = value;
            button.dataset.itemId = id;
            button.textContent = text;
            button.setAttribute("aria-pressed", String(answer.status === value));
            button.disabled = locked;
            button.addEventListener("click", () => {
              draft.answers[id] = {
                ...draft.answers[id],
                status: value,
                note: value === "fail" ? (draft.answers[id]?.note || "") : "",
                photo: value === "fail" ? (draft.answers[id]?.photo || "") : ""
              };
              reviewSectionIndex = null;
              saveDraft();
              renderChecklist();
              document.querySelector(`.status-button[data-item-id="${id}"][data-status="${value}"]`)?.focus();
            });
            options.append(button);
          });

          row.append(copy, options);
          if (answer.status === "fail") {
            const noteField = document.createElement("div");
            noteField.className = "field observation";
            const noteLabel = document.createElement("label");
            noteLabel.textContent = "Descreva a falha observada";
            noteLabel.htmlFor = `note-${id}`;
            const note = document.createElement("textarea");
            note.id = `note-${id}`;
            note.maxLength = 500;
            note.placeholder = "Informe o problema, localização e qualquer detalhe importante.";
            note.value = answer.note || "";
            note.required = true;
            note.disabled = locked;
            note.addEventListener("input", () => {
              draft.answers[id].note = note.value;
              saveDraft();
              updateSummary();
            });
            note.addEventListener("change", renderChecklist);
            noteField.append(noteLabel, note);

            const photoLabel = document.createElement("label");
            photoLabel.className = "photo-field";
            const photoLabelText = document.createElement("span");
            photoLabelText.textContent = "Foto da não conformidade (opcional)";
            const photoInput = document.createElement("input");
            photoInput.type = "file";
            photoInput.accept = "image/*";
            photoInput.setAttribute("capture", "environment");
            photoInput.disabled = locked;
            const photoHint = document.createElement("span");
            photoHint.className = "photo-hint";
            photoHint.textContent = "A foto será compactada e anexada a este item.";
            photoInput.addEventListener("change", async () => {
              const file = photoInput.files?.[0];
              if (!file) return;
              photoInput.disabled = true;
              try {
                draft.answers[id].photo = await compressPhoto(file);
                if (!saveDraft()) return;
                renderChecklist();
                document.querySelector(`.inspection-item[data-item-id="${id}"] .photo-field input`)?.focus();
              } catch (error) {
                showNotice(`Não foi possível anexar a foto: ${error.message}`);
                photoInput.disabled = locked;
                photoInput.value = "";
              }
            });
            photoLabel.append(photoLabelText, photoInput, photoHint);
            noteField.append(photoLabel);

            if (answer.photo) {
              const preview = document.createElement("div");
              preview.className = "photo-preview";
              const image = document.createElement("img");
              image.src = answer.photo;
              image.alt = `Foto da não conformidade: ${label}`;
              const removePhoto = document.createElement("button");
              removePhoto.type = "button";
              removePhoto.className = "remove-photo";
              removePhoto.textContent = "Remover foto";
              removePhoto.disabled = locked;
              removePhoto.addEventListener("click", () => {
                delete draft.answers[id].photo;
                saveDraft();
                renderChecklist();
              });
              preview.append(image, removePhoto);
              noteField.append(preview);
            }
            row.append(noteField);
          }
          group.append(row);
        });
        container.append(group);
      });
      updateSummary();
    }

    function updateSummary() {
      const items = allItems();
      const total = items.length;
      const answers = items.map(({ id }) => draft.answers[id] || {});
      const responded = items.filter(({ id }) => itemIsComplete(id)).length;
      const failures = answers.filter((answer) => answer.status === "fail").length;
      const conforms = answers.filter((answer) => answer.status === "ok").length;
      const notApplicable = answers.filter((answer) => answer.status === "na").length;
      const aptitude = calculateAptitude();
      const percentage = total ? Math.round((responded / total) * 100) : 0;
      document.getElementById("progress-text").textContent = `${responded} de ${total}`;
      document.getElementById("progress-fill").style.width = `${percentage}%`;
      document.getElementById("progressbar").setAttribute("aria-valuenow", String(percentage));
      document.getElementById("summary-percent").textContent = `${percentage}%`;
      document.getElementById("summary-fill").style.width = `${percentage}%`;
      document.getElementById("summary-description").textContent = draft.vehicle.type ? vehicleName(draft.vehicle) : "Selecione um tipo para iniciar o checklist.";
      const completion = document.getElementById("completion-pill");
      completion.textContent = draft.finalizedAt ? "Finalizado" : (responded === total && total ? "Pronto para finalizar" : "Em andamento");
      completion.className = `pill${draft.finalizedAt ? " pill-good" : ""}`;

      const summary = document.getElementById("status-summary");
      summary.replaceChildren();
      [[`${conforms} conformes`, "pill-good"], [`${failures} não conformes`, failures ? "pill-bad" : ""], [`${notApplicable} não se aplicam`, ""]].forEach(([text, className]) => {
        const pill = document.createElement("span");
        pill.className = `pill ${className}`.trim();
        pill.textContent = text;
        summary.append(pill);
      });

      const aptitudeCard = document.getElementById("aptitude-card");
      const aptitudeStatus = document.getElementById("aptitude-status");
      const aptitudeDetail = document.getElementById("aptitude-detail");
      aptitudeCard.className = `aptitude-card ${aptitude.status}`;
      if (aptitude.status === "pending") {
        aptitudeStatus.textContent = "Pendente";
        aptitudeDetail.textContent = total
          ? `Confirme como “Conforme” todos os requisitos essenciais (${aptitude.missingCount} aguardando confirmação).`
          : "Selecione o tipo de veículo e conclua a inspeção para avaliar os requisitos essenciais.";
      } else if (aptitude.status === "unfit") {
        aptitudeStatus.textContent = "Não apto";
        aptitudeDetail.textContent = `Falha em ${aptitude.criticalFailures.length} requisito(s) essencial(is). Não opere e comunique o responsável.`;
      } else {
        aptitudeStatus.textContent = "Apto";
        if (aptitude.remainingCount) {
          aptitudeDetail.textContent = `Requisitos essenciais atendidos. Complete os ${aptitude.remainingCount} itens restantes antes de finalizar.`;
        } else if (failures) {
          aptitudeDetail.textContent = "Requisitos essenciais atendidos; há outras não conformidades registradas. Avalie-as antes da liberação.";
        } else {
          aptitudeDetail.textContent = "Todos os itens foram verificados e os requisitos essenciais para operação foram atendidos.";
        }
      }

      const result = document.getElementById("result-banner");
      if (aptitude.status === "unfit") {
        result.textContent = `${draft.finalizedAt ? "Inspeção finalizada" : "Inspeção em andamento"}: falha em requisito essencial. Veículo não apto para operação.`;
        result.className = "result-banner bad";
      } else if (draft.finalizedAt) {
        result.textContent = failures ? `Inspeção finalizada com ${failures} não conformidade(s). Avalie os riscos antes de liberar o equipamento.` : "Inspeção finalizada. Confirme as condições de uso antes de iniciar a operação.";
        result.className = `result-banner ${failures ? "bad" : "good"}`;
      } else if (failures) {
        result.textContent = `${failures} não conformidade(s) identificada(s). O status de aptidão só será calculado após responder todos os itens.`;
        result.className = "result-banner bad";
      } else {
        result.textContent = total && responded === total
          ? "Todos os requisitos essenciais foram atendidos. Siga os procedimentos de segurança da operação."
          : "O status de aptidão será calculado após todos os itens serem verificados.";
        result.className = "result-banner";
      }
      const unresolvedItems = items.some(({ id }) => {
        const answer = draft.answers[id];
        return !answer?.status || (answer.status === "fail" && !answer.note?.trim());
      });
      document.getElementById("finish-checklist").disabled = !total || unresolvedItems || Boolean(draft.finalizedAt);
      document.getElementById("finish-checklist").textContent = draft.finalizedAt ? "Inspeção finalizada" : "Finalizar inspeção";
      document.querySelectorAll("#vehicle-type, #operator, [data-vehicle-field]").forEach((input) => {
        input.disabled = Boolean(draft.finalizedAt);
      });
      document.getElementById("general-comment").disabled = Boolean(draft.finalizedAt);
    }

    function renderHistory() {
      const container = document.getElementById("history-list");
      container.replaceChildren();
      document.getElementById("history-count").textContent = String(history.length);
      const dialogContainer = document.getElementById("history-dialog-list");
      dialogContainer.replaceChildren();
      if (!history.length) {
        const empty = document.createElement("p");
        empty.className = "history-empty";
        empty.textContent = "Nenhuma inspeção finalizada ainda.";
        container.append(empty);
        const dialogEmpty = document.createElement("p");
        dialogEmpty.className = "history-empty-large";
        dialogEmpty.textContent = "Ainda não há checklists realizados. As inspeções aparecerão aqui após serem finalizadas.";
        dialogContainer.append(dialogEmpty);
        return;
      }

      history.slice(0, 5).forEach((record) => {
        const entry = document.createElement("div");
        entry.className = "history-entry";
        const title = document.createElement("strong");
        title.textContent = vehicleName(record.vehicle);
        const detail = document.createElement("span");
        const issues = Object.values(record.answers || {}).filter((answer) => answer.status === "fail").length;
        const aptitudeLabel = record.aptitude === "fit" ? "Apto" : record.aptitude === "unfit" ? "Não apto" : "Pendente";
        detail.textContent = `${record.operator || "Operador não informado"} · ${formatDate(record.openedAt)} · ${aptitudeLabel} · ${issues} não conformidade(s)`;
        entry.append(title, detail);
        container.append(entry);
      });

      history.forEach((record) => {
        const recordItems = itemsForType(record.vehicle?.type);
        const failedCount = recordItems.filter(({ id }) => record.answers?.[id]?.status === "fail").length;
        const criticalFailure = recordItems.some(({ id, essential }) => essential && record.answers?.[id]?.status === "fail");
        const essentialItems = recordItems.filter(({ essential }) => essential);
        const essentialsConfirmed = essentialItems.every(({ id }) => record.answers?.[id]?.status === "ok");
        const aptitude = record.aptitude || (criticalFailure ? "unfit" : essentialsConfirmed ? "fit" : "pending");
        const aptitudeLabel = aptitude === "fit" ? "Apto" : aptitude === "unfit" ? "Não apto" : "Pendente";

        const details = document.createElement("details");
        details.className = "history-record";
        const summary = document.createElement("summary");
        const titleWrap = document.createElement("span");
        titleWrap.className = "history-record-title";
        const title = document.createElement("strong");
        title.textContent = `${vehicleName(record.vehicle)} · ${record.id || "Inspeção"}`;
        const subtitle = document.createElement("span");
        subtitle.textContent = `${record.operator || "Operador não informado"} · ${formatDate(record.openedAt)}`;
        titleWrap.append(title, subtitle);
        const badge = document.createElement("span");
        badge.className = `pill${aptitude === "fit" ? " pill-good" : aptitude === "unfit" ? " pill-bad" : " pill-warn"}`;
        badge.textContent = aptitudeLabel;
        summary.append(titleWrap, badge);
        details.append(summary);

        const content = document.createElement("div");
        content.className = "history-record-content";
        const metadata = document.createElement("div");
        metadata.className = "history-metadata";
        [
          ["Tipo", vehicleName(record.vehicle)],
          ["Operador", record.operator || "—"],
          ["Iniciado", formatDate(record.openedAt)],
          ["Finalizado", formatDate(record.finalizedAt)],
          ["Placa / registro", record.vehicle?.plate || "—"],
          ["Frota / patrimônio", record.vehicle?.fleetNumber || "—"],
          ["Série / chassi", record.vehicle?.serialNumber || "—"],
          ["Marca e modelo", record.vehicle?.makeModel || "—"],
          ["Cor", record.vehicle?.color || "—"],
          ["Quilometragem / horímetro", record.vehicle?.reading || "—"],
          ["Local", record.vehicle?.location || "—"],
          ["Resultado", `${aptitudeLabel} · ${failedCount} não conformidade(s)`]
        ].forEach(([label, value]) => {
          const cell = document.createElement("div");
          const key = document.createElement("span");
          key.textContent = label;
          const text = document.createElement("strong");
          text.textContent = value;
          cell.append(key, text);
          metadata.append(cell);
        });
        content.append(metadata);

        sectionsForType(record.vehicle?.type).forEach((section) => {
          const answerGroup = document.createElement("section");
          answerGroup.className = "history-answer-group";
          const heading = document.createElement("h3");
          heading.textContent = section.title;
          answerGroup.append(heading);
          section.items.forEach(([id, label]) => {
            const answer = record.answers?.[id] || {};
            const item = document.createElement("div");
            item.className = "history-answer";
            const itemName = document.createElement("span");
            itemName.textContent = label;
            const status = document.createElement("span");
            status.className = `history-answer-status ${answer.status || ""}`;
            status.textContent = statusNames[answer.status] || "Sem resposta";
            item.append(itemName, status);
            if (answer.note) {
              const note = document.createElement("span");
              note.className = "history-answer-note";
              note.textContent = `Observação: ${answer.note}`;
              item.append(note);
            }
            if (answer.photo) {
              const photo = document.createElement("img");
              photo.className = "history-photo";
              photo.src = answer.photo;
              photo.alt = `Foto anexada: ${label}`;
              item.append(photo);
            }
            answerGroup.append(item);
          });
          content.append(answerGroup);
        });

        if (record.comment?.trim()) {
          const comment = document.createElement("div");
          comment.className = "history-comment";
          comment.textContent = `Comentário geral: ${record.comment}`;
          content.append(comment);
        }
        details.append(content);
        dialogContainer.append(details);
      });
    }

    function updateInputsFromDraft() {
      setInputValues();
      renderChecklist();
      renderRegistries();
    }

    function hasInspectionProgress() {
      return Object.keys(draft.answers).length > 0 || Boolean(draft.comment?.trim());
    }

    function confirmVehicleChange() {
      return !hasInspectionProgress() || window.confirm("Trocar o veículo apagará as respostas e o comentário deste checklist. Deseja continuar?");
    }

    function clearInspectionProgress() {
      draft.answers = {};
      draft.comment = "";
      document.getElementById("general-comment").value = "";
    }

    document.getElementById("saved-vehicle").addEventListener("change", (event) => {
      if (draft.finalizedAt) return;
      const selectedId = event.target.value;
      if (selectedId === "__new__") {
        if (!confirmVehicleChange()) {
          const currentVehicle = findSavedVehicle(draft.vehicle);
          event.target.value = currentVehicle?.id || "";
          return;
        }
        draft.vehicle = { type: "", plate: "", fleetNumber: "", serialNumber: "", makeModel: "", color: "", reading: "", location: "" };
        clearInspectionProgress();
        reviewSectionIndex = null;
        saveDraft();
        setInputValues();
        renderChecklist();
        event.target.value = "__new__";
        document.getElementById("vehicle-type").focus();
        showNotice("Preencha os dados do novo veículo e selecione “Salvar veículo” para cadastrá-lo.");
        return;
      }

      const selectedVehicle = vehicles.find((vehicle) => vehicle.id === selectedId);
      if (!selectedVehicle) return;
      const currentVehicle = findSavedVehicle(draft.vehicle);
      if (currentVehicle?.id !== selectedVehicle.id && !confirmVehicleChange()) {
        event.target.value = currentVehicle?.id || "";
        return;
      }
      draft.vehicle = { ...selectedVehicle.details, type: selectedVehicle.type };
      if (currentVehicle?.id !== selectedVehicle.id) {
        clearInspectionProgress();
        reviewSectionIndex = null;
      }
      saveDraft();
      setInputValues();
      renderChecklist();
      renderRegistries();
      showNotice(`Dados de “${vehicleName(draft.vehicle)}” preenchidos.`);
    });

    document.getElementById("saved-operator").addEventListener("change", (event) => {
      if (draft.finalizedAt) return;
      if (event.target.value === "__new__") {
        draft.operator = "";
        document.getElementById("operator").value = "";
        saveDraft();
        document.getElementById("operator").focus();
        showNotice("Digite o nome do novo operador e selecione “Salvar operador” para cadastrá-lo.");
        return;
      }
      const selectedOperator = operators.find((operator) => operator.id === event.target.value);
      if (!selectedOperator) return;
      draft.operator = selectedOperator.name;
      document.getElementById("operator").value = selectedOperator.name;
      saveDraft();
      showNotice(`Operador “${selectedOperator.name}” selecionado.`);
    });

    document.getElementById("save-vehicle").addEventListener("click", () => {
      if (draft.finalizedAt) return;
      if (!draft.vehicle.type) {
        showNotice("Selecione o tipo do veículo antes de salvá-lo no cadastro.");
        document.getElementById("vehicle-type").focus();
        return;
      }
      if (!vehicleIdentity(draft.vehicle)) {
        showNotice("Informe a placa, o número de frota/patrimônio ou o número de série para identificar o veículo.");
        document.getElementById("plate").focus();
        return;
      }
      const existing = findSavedVehicle(draft.vehicle);
      const savedVehicle = {
        id: existing?.id || newId(),
        type: draft.vehicle.type,
        details: Object.fromEntries(
          Object.keys(draft.vehicle)
            .filter((key) => key !== "type")
            .map((key) => [key, draft.vehicle[key] || ""])
        )
      };
      const nextVehicles = existing
        ? vehicles.map((vehicle) => vehicle.id === existing.id ? savedVehicle : vehicle)
        : [...vehicles, savedVehicle];
      if (!saveRegistry(VEHICLES_KEY, nextVehicles)) return;
      vehicles = nextVehicles;
      renderRegistries();
      document.getElementById("saved-vehicle").value = savedVehicle.id;
      showNotice(existing ? "Cadastro do veículo atualizado." : "Veículo cadastrado para as próximas inspeções.");
    });

    document.getElementById("save-operator").addEventListener("click", () => {
      if (draft.finalizedAt) return;
      const name = draft.operator.trim();
      if (!name) {
        showNotice("Informe o nome do operador antes de salvá-lo no cadastro.");
        document.getElementById("operator").focus();
        return;
      }
      const existing = operators.find((operator) => normalize(operator.name) === normalize(name));
      const savedOperator = { id: existing?.id || newId(), name };
      const nextOperators = existing
        ? operators.map((operator) => operator.id === existing.id ? savedOperator : operator)
        : [...operators, savedOperator];
      if (!saveRegistry(OPERATORS_KEY, nextOperators)) return;
      operators = nextOperators;
      renderRegistries();
      document.getElementById("saved-operator").value = savedOperator.id;
      showNotice(existing ? "Cadastro do operador atualizado." : "Operador cadastrado para as próximas inspeções.");
    });

    document.getElementById("vehicle-type").addEventListener("change", (event) => {
      if (draft.finalizedAt) return;
      const previousType = draft.vehicle.type;
      draft.vehicle.type = event.target.value;
      if (previousType && previousType !== draft.vehicle.type) {
        reviewSectionIndex = null;
        const validIds = new Set(allItems().map(({ id }) => id));
        Object.keys(draft.answers).forEach((id) => {
          if (!validIds.has(id)) delete draft.answers[id];
        });
      }
      document.getElementById("reading-label").textContent = draft.vehicle.type === "machine" ? "Horímetro" : "Quilometragem / horímetro";
      document.getElementById("reading").placeholder = draft.vehicle.type === "machine" ? "Horas de operação" : "Leitura atual";
      saveDraft();
      renderChecklist();
      document.getElementById("saved-vehicle").value = findSavedVehicle(draft.vehicle)?.id || (vehicleIdentity(draft.vehicle) ? "__new__" : "");
    });

    document.getElementById("operator").addEventListener("input", (event) => {
      draft.operator = event.target.value;
      saveDraft();
      document.getElementById("saved-operator").value = operators.find((operator) => normalize(operator.name) === normalize(draft.operator))?.id || (draft.operator.trim() ? "__new__" : "");
    });

    document.getElementById("general-comment").addEventListener("input", (event) => {
      draft.comment = event.target.value;
      saveDraft();
    });

    document.querySelectorAll("[data-vehicle-field]").forEach((input) => {
      input.addEventListener("input", () => {
        if (draft.finalizedAt) return;
        draft.vehicle[input.dataset.vehicleField] = input.value;
        saveDraft();
        const savedVehicle = findSavedVehicle(draft.vehicle);
        document.getElementById("saved-vehicle").value = savedVehicle?.id || (vehicleIdentity(draft.vehicle) ? "__new__" : "");
        document.getElementById("summary-description").textContent = draft.vehicle.type ? vehicleName(draft.vehicle) : "Selecione um tipo para iniciar o checklist.";
      });
    });

    document.getElementById("finish-checklist").addEventListener("click", () => {
      const problems = [];
      if (!draft.vehicle.type) problems.push("Selecione o tipo do veículo ou equipamento.");
      if (!draft.operator.trim()) problems.push("Informe o nome do operador.");
      if (draft.vehicle.type === "machine" && !draft.vehicle.fleetNumber.trim() && !draft.vehicle.serialNumber.trim()) {
        problems.push("Informe o número de frota/patrimônio ou o número de série da máquina.");
      }
      if ((draft.vehicle.type === "car" || draft.vehicle.type === "truck") && !draft.vehicle.plate.trim()) {
        problems.push("Informe a placa do veículo.");
      }
      const missing = allItems().filter(({ id }) => !draft.answers[id]?.status);
      if (missing.length) problems.push(`${missing.length} item(ns) sem resposta; todos os itens devem ser verificados ou marcados como N/A.`);
      const notesMissing = allItems().filter(({ id }) => draft.answers[id]?.status === "fail" && !draft.answers[id]?.note?.trim());
      if (notesMissing.length) problems.push(`${notesMissing.length} não conformidade(s) sem observação.`);
      if (problems.length) {
        showNotice(`Não foi possível finalizar: ${problems.join(" ")}`);
        if (!draft.vehicle.type) document.getElementById("vehicle-type").focus();
        else if (!draft.operator.trim()) document.getElementById("operator").focus();
        else if (missing.length) document.querySelector(".status-button[aria-pressed='false']")?.focus();
        else document.querySelector(".observation textarea")?.focus();
        return;
      }

      draft.aptitude = calculateAptitude().status;
      draft.finalizedAt = new Date().toISOString();
      const record = JSON.parse(JSON.stringify(draft));
      history.unshift(record);
      history = history.slice(0, 100);
      const historySaved = save(HISTORY_KEY, history);
      const draftSaved = saveDraft();
      renderHistory();
      renderChecklist();
      renderRegistries();
      if (historySaved && draftSaved) {
        notice.textContent = "Inspeção finalizada e registrada neste navegador. Use “Imprimir relatório” para guardar uma cópia.";
        notice.hidden = false;
      }
    });

    document.getElementById("new-checklist").addEventListener("click", () => {
      const hasAnswers = Object.keys(draft.answers).length > 0 || draft.operator.trim() || draft.vehicle.type;
      if (!draft.finalizedAt && hasAnswers && !window.confirm("Este checklist ainda não foi finalizado. Iniciar outro descartará o rascunho atual. Deseja continuar?")) return;
      draft = createDraft();
      reviewSectionIndex = null;
      saveDraft();
      notice.hidden = true;
      document.getElementById("saved-vehicle").value = "";
      document.getElementById("saved-operator").value = "";
      updateInputsFromDraft();
    });

    document.getElementById("print-report").addEventListener("click", () => window.print());
    document.getElementById("continue-checklist").addEventListener("click", () => {
      reviewSectionIndex = null;
      renderChecklist();
      document.getElementById("inspection-heading").scrollIntoView({ behavior: "smooth", block: "start" });
    });

    const historyDialog = document.getElementById("history-dialog");
    document.getElementById("history-button").addEventListener("click", () => {
      renderHistory();
      historyDialog.showModal();
    });
    document.getElementById("close-history").addEventListener("click", () => historyDialog.close());

    async function passwordHash(password) {
      if (!crypto.subtle) {
        throw new Error("A autenticação exige um navegador seguro. Abra a aplicação por localhost ou HTTPS.");
      }
      const bytes = new TextEncoder().encode(password);
      const digest = await crypto.subtle.digest("SHA-256", bytes);
      return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
    }

    async function isValidPassword(password) {
      let savedHash;
      try {
        savedHash = localStorage.getItem(AUTH_KEY);
      } catch (error) {
        throw new Error(`Não foi possível verificar a senha salva: ${error.message}`);
      }
      if (!savedHash) return password === INITIAL_PASSWORD;
      return (await passwordHash(password)) === savedHash;
    }

    document.getElementById("login-form").addEventListener("submit", async (event) => {
      event.preventDefault();
      const username = document.getElementById("login-user").value.trim();
      const password = document.getElementById("login-password").value;
      const errorElement = document.getElementById("login-error");
      errorElement.hidden = true;
      if (!username) {
        errorElement.textContent = "Informe seu nome de usuário.";
        errorElement.hidden = false;
        return;
      }
      try {
        if (!(await isValidPassword(password))) {
          errorElement.textContent = "Senha incorreta. Confira a senha e tente novamente.";
          errorElement.hidden = false;
          document.getElementById("login-password").focus();
          return;
        }
      } catch (error) {
        errorElement.textContent = error.message;
        errorElement.hidden = false;
        return;
      }

      document.getElementById("logged-user").textContent = username;
      document.getElementById("login-screen").hidden = true;
      document.getElementById("app-shell").hidden = false;
      document.getElementById("login-password").value = "";
      if (!draft.finalizedAt && !draft.operator.trim()) {
        draft.operator = username;
        setInputValues();
        saveDraft();
        renderRegistries();
      }
    });

    document.getElementById("logout-button").addEventListener("click", () => {
      document.getElementById("app-shell").hidden = true;
      document.getElementById("login-screen").hidden = false;
      document.getElementById("login-password").value = "";
      document.getElementById("login-error").hidden = true;
      document.getElementById("login-user").focus();
    });

    const passwordDialog = document.getElementById("password-dialog");
    document.getElementById("change-password-button").addEventListener("click", () => {
      document.getElementById("password-error").hidden = true;
      passwordDialog.showModal();
      document.getElementById("current-password").focus();
    });
    document.getElementById("cancel-password").addEventListener("click", () => passwordDialog.close());
    document.getElementById("change-password-form").addEventListener("submit", async (event) => {
      event.preventDefault();
      const current = document.getElementById("current-password").value;
      const next = document.getElementById("new-password").value;
      const confirmation = document.getElementById("confirm-password").value;
      const errorElement = document.getElementById("password-error");
      errorElement.hidden = true;
      if (next.length < 6) {
        errorElement.textContent = "A nova senha precisa ter pelo menos 6 caracteres.";
        errorElement.hidden = false;
        return;
      }
      if (next !== confirmation) {
        errorElement.textContent = "A confirmação não corresponde à nova senha.";
        errorElement.hidden = false;
        return;
      }
      try {
        if (!(await isValidPassword(current))) {
          errorElement.textContent = "A senha atual está incorreta.";
          errorElement.hidden = false;
          return;
        }
        localStorage.setItem(AUTH_KEY, await passwordHash(next));
        document.getElementById("change-password-form").reset();
        passwordDialog.close();
        document.querySelector(".login-hint").textContent = "A senha inicial foi alterada neste navegador.";
        showNotice("Senha alterada. Use a nova senha no próximo acesso.");
      } catch (error) {
        errorElement.textContent = `Não foi possível alterar a senha: ${error.message}`;
        errorElement.hidden = false;
      }
    });

    setInputValues();
    renderChecklist();
    renderHistory();
    renderRegistries();
