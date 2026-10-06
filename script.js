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

    const DRAFT_KEY = "frota-checklist-draft-v1";
    const HISTORY_KEY = "frota-checklist-history-v1";
    const VEHICLES_KEY = "frota-checklist-vehicles-v1";
    const OPERATORS_KEY = "frota-checklist-operators-v1";
    const statusNames = { ok: "Conforme", fail: "Não conforme", na: "N/A" };
    const notice = document.getElementById("notice");
    let draft = readDraft();
    let history = readHistory();
    let vehicles = readVehicles();
    let operators = readOperators();

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

    function allSections() {
      if (!draft.vehicle.type) return [];
      return [...commonSections, ...typeSections[draft.vehicle.type]];
    }

    function allItems() {
      return allSections().flatMap((section) => section.items.map(([id, label]) => ({ id, label, section: section.title })));
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
      content.hidden = !sections.length;
      empty.hidden = Boolean(sections.length);
      document.getElementById("locked-note").hidden = !locked;
      if (!sections.length) {
        container.replaceChildren();
        updateSummary();
        return;
      }

      container.replaceChildren();
      sections.forEach((section) => {
        const group = document.createElement("section");
        group.className = "group";
        const title = document.createElement("div");
        title.className = "group-title";
        const heading = document.createElement("span");
        heading.textContent = section.title;
        const count = document.createElement("span");
        count.className = "group-count";
        const answered = section.items.filter(([id]) => draft.answers[id]?.status).length;
        count.textContent = `${answered}/${section.items.length} respondidos`;
        title.append(heading, count);
        group.append(title);

        section.items.forEach(([id, label]) => {
          const answer = draft.answers[id] || {};
          const row = document.createElement("div");
          row.className = `inspection-item${answer.status === "fail" ? " has-failure" : ""}`;
          row.dataset.itemId = id;
          const copy = document.createElement("div");
          copy.className = "item-copy";
          const name = document.createElement("span");
          name.className = "item-name";
          name.textContent = label;
          copy.append(name);
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
              draft.answers[id] = { ...draft.answers[id], status: value, note: value === "fail" ? (draft.answers[id]?.note || "") : "" };
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
            noteField.append(noteLabel, note);
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
      const responded = answers.filter((answer) => answer.status).length;
      const failures = answers.filter((answer) => answer.status === "fail").length;
      const conforms = answers.filter((answer) => answer.status === "ok").length;
      const notApplicable = answers.filter((answer) => answer.status === "na").length;
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

      const result = document.getElementById("result-banner");
      if (draft.finalizedAt) {
        result.textContent = failures ? `Inspeção finalizada com ${failures} não conformidade(s). Avalie os riscos antes de liberar o equipamento.` : "Inspeção finalizada. Confirme as condições de uso antes de iniciar a operação.";
        result.className = `result-banner ${failures ? "bad" : "good"}`;
      } else if (failures) {
        result.textContent = `${failures} não conformidade(s) identificada(s). Não opere em caso de falha crítica; comunique o responsável.`;
        result.className = "result-banner bad";
      } else {
        result.textContent = "A inspeção não substitui os procedimentos de segurança da sua operação.";
        result.className = "result-banner";
      }
      document.getElementById("finish-checklist").disabled = !total || Boolean(draft.finalizedAt);
      document.getElementById("finish-checklist").textContent = draft.finalizedAt ? "Inspeção finalizada" : "Finalizar inspeção";
      document.querySelectorAll("#vehicle-type, #operator, [data-vehicle-field]").forEach((input) => {
        input.disabled = Boolean(draft.finalizedAt);
      });
      document.getElementById("general-comment").disabled = Boolean(draft.finalizedAt);
    }

    function renderHistory() {
      const container = document.getElementById("history-list");
      container.replaceChildren();
      if (!history.length) {
        const empty = document.createElement("p");
        empty.className = "history-empty";
        empty.textContent = "Nenhuma inspeção finalizada ainda.";
        container.append(empty);
        return;
      }
      history.slice(0, 5).forEach((record) => {
        const entry = document.createElement("div");
        entry.className = "history-entry";
        const title = document.createElement("strong");
        title.textContent = vehicleName(record.vehicle);
        const detail = document.createElement("span");
        const issues = Object.values(record.answers || {}).filter((answer) => answer.status === "fail").length;
        detail.textContent = `${record.operator || "Operador não informado"} · ${formatDate(record.openedAt)} · ${issues} não conformidade(s)`;
        entry.append(title, detail);
        container.append(entry);
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
      if (currentVehicle?.id !== selectedVehicle.id) clearInspectionProgress();
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
      saveDraft();
      notice.hidden = true;
      document.getElementById("saved-vehicle").value = "";
      document.getElementById("saved-operator").value = "";
      updateInputsFromDraft();
    });

    document.getElementById("print-report").addEventListener("click", () => window.print());

    setInputValues();
    renderChecklist();
    renderHistory();
    renderRegistries();
